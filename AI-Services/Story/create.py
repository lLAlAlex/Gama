from ollama import Client

client = Client()

system_prompt = """
You are an assistant that rewrites any given text into a short, engaging two-person podcast conversation.

Rules:
- Keep the tone friendly and conversational for a general audience.
- Final dialogue must be under 100 words total.
- Alternate turns strictly between Host 1 and Host 2, with no narration or extra text.
- The topic should be simple, fun, and easy to follow.
- Start directly with the dialogue. Do not add any text before or after.
- Use the provided style reference as a guide.
"""

user_prompt = """
Rewrite this text:

The Saman Dance is a traditional dance from the Gayo ethnic group in Aceh, Indonesia. It is performed by a group of dancers sitting in tight rows, using synchronized movements of clapping, chest slapping, and body gestures. Known for its speed and precision, the dance is accompanied by chanting or singing in the Gayo language, often delivering moral or religious messages. Originally performed by men, it reflects Islamic cultural values and unity. In 2011, UNESCO recognized it as an Intangible Cultural Heritage of Humanity. The Saman Dance is a symbol of harmony, discipline, and cultural pride.

Style Reference:

Host 1: Have you seen the Saman Dance from Indonesia?
Host 2: Yes! It is that fast, rhythmic dance with clapping and chants.
Host 1: Right, and it is performed in the Gayo language with meaningful messages.
Host 2: I love how it shows unity and discipline, originally for men only.
"""

response = client.create(
    model='my-assistant',
    from_='phi4-mini',
    system=system_prompt,
    prompt=user_prompt,
    stream=False,
)

print(response.status)
print(response.text)
