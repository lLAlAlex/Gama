import torch
from TTS.api import TTS

device = "cuda" if torch.cuda.is_available() else "cpu"

print("Loading Coqui TTS model... This may take a moment on the first run.")
try:
    tts = TTS("tts_models/multilingual/multi-dataset/xtts_v2_0_2").to(device)
    print("Coqui TTS model loaded successfully.")
except Exception as e:
    print(f"Failed to load Coqui TTS model: {e}")
    tts = None

def synthesize_text(text: str, output_filename: str):
    if tts is None:
        raise RuntimeError("TTS model is not available. Check loading errors.")

    try:
        print(f"Requesting synthesis for text: '{text[:40]}...'")
        speaker_wav_path = "https://github.com/coqui-ai/TTS/raw/dev/tests/data/ljspeech/wavs/LJ001-0001.wav"

        tts.tts_to_file(
            text=text,
            speaker_wav=speaker_wav_path,
            language="en",
            file_path=output_filename
        )
        
        print(f'Audio content successfully written to file "{output_filename}"')

    except Exception as e:
        print(f"An error occurred during local synthesis: {e}")
        raise