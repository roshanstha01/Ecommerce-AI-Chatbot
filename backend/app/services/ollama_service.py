import re
import requests

OLLAMA_URL = "http://localhost:11434/api/generate"

def generate_rag_answer(user_question, context_chunks, history=[]):
    context = "\n\n".join(context_chunks)

    history_text = ""
    for msg in history[-5:]:
        history_text += f"{msg['role']}: {msg['text']}\n"

    prompt = f"""
You are an e-commerce assistant.

Continue the conversation naturally.
DO NOT greet again if already greeted.

IMPORTANT:
- If giving steps, use numbered list
- Each step must be on a new line
- Keep answers clean and easy to read

Conversation:
{history_text}

Context:
{context}

User question:
{user_question}

Answer:
"""

    try:
        response = requests.post(
            OLLAMA_URL,
            json={
                "model": "llama3",
                "prompt": prompt,
                "stream": False
            }
        )

        data = response.json()
        response_text = data.get("response", "No response")

        # Put numbered items on new lines
        response_text = re.sub(r"(?<!^)\s*(\d+\.\s)", r"\n\1", response_text)

        # Put bullet items on new lines
        response_text = re.sub(r"\s*•\s*", r"\n• ", response_text)

        return response_text.strip()

    except Exception as e:
        print("Ollama error:", e)

        if context_chunks:
            return context_chunks[0]

        return "Something went wrong."