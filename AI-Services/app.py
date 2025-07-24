import openllm
import os
import uuid
from flask import Flask, request, jsonify, render_template, send_file, after_this_request
from dotenv import load_dotenv
from flask_cors import CORS

# from gtts import gTTS
# from TTS.main import synthesize_text

load_dotenv()

app = Flask(__name__)
CORS(app)

model_id = "facebook/opt-1.3b"
llm = openllm.AutoLLM.for_model(
    model_id,
    backend="pt",
    device="cpu",  # Use "cuda" if you have GPU
    ensure_available=True
)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/api/chat', methods=['POST'])
def chat():
    data = request.json
    message = data.get('message', '')
    chat_history = data.get('history', [])
    
    if not message:
        return jsonify({'error': 'No message provided'}), 400
    
    try:
        # Generate response using the correct method
        response = llm.generate(message)
        
        # Format the response
        bot_response = {
            'message': response[0]['generated_text'],
            'history': chat_history + [{'user': message, 'bot': response[0]['generated_text']}]
        }
        
        return jsonify(bot_response)
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# @app.route('/api/synthesize', methods=['POST'])
# def handle_synthesis():
#     data = request.get_json()
#     if not data or 'text' not in data or not data['text'].strip():
#         return jsonify({"error": "Request must include non-empty 'text' in JSON body"}), 400

#     text_to_synthesize = data['text']
    
#     temp_dir = 'temp_audio'
#     os.makedirs(temp_dir, exist_ok=True)
    
#     output_filename = os.path.join(temp_dir, f"{uuid.uuid4()}.wav")

#     try:
#         synthesize_text(text_to_synthesize, output_filename)

#         @after_this_request
#         def cleanup(response):
#             """ Deletes the temporary file after the request is sent. """
#             try:
#                 os.remove(output_filename)
#                 print(f"Cleaned up temporary file: {output_filename}")
#             except OSError as e:
#                 print(f"Error removing file {output_filename}: {e}")
#             return response

#         return send_file(output_filename, mimetype='audio/wav')

#     except Exception as e:
#         print(f"An error occurred during synthesis: {e}")
#         return jsonify({"error": "Failed to synthesize speech.", "details": str(e)}), 500

# @app.route('/tts', methods=['POST'])
# def tts_api():
#     text = request.json.get('text', '')
#     language = request.json.get('lang', 'id')
    
#     # Buat objek gTTS
#     tts = gTTS(text=text, lang=language, slow=False)
    
#     # Simpan ke file sementara
#     filename = "temp_audio.mp3"
#     tts.save(filename)
    
#     # Kirim file sebagai response
#     return send_file(
#         filename,
#         mimetype="audio/mpeg",
#         as_attachment=True,
#         download_name="output.mp3"
#     )

if __name__ == '__main__':
    print("Starting Flask server for local AI models...")
    app.run(host='0.0.0.0', port=5000, debug=True)