import edge_tts
import asyncio

async def generate_speech(text, voice="id-ID-ArdiNeural", output_file="output.mp3"):
    communicate = edge_tts.Communicate(text=text, voice=voice)
    await communicate.save(output_file)

# Contoh penggunaan
text = "Halo, ini adalah contoh suara dari Microsoft Edge TTS"
asyncio.run(generate_speech(text))

from gtts import gTTS
import playsound
import os

def text_to_speech(text, language='id'):
    tts = gTTS(text=text, lang=language, slow=False)
    filename = "output.mp3"
    tts.save(filename)
    playsound.playsound(filename)
    os.remove(filename)  # Hapus file setelah diputar

# Contoh penggunaan
text_to_speech("Halo, ini adalah contoh suara dari text to speech")