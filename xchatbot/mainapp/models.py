from django.db import models

# Create your models here.
from django.db import models
from django.contrib.auth.models import User

class Credential(models.Model):
    MODEL_CHOICES = [
        ("OpenAI", "OpenAI"),
        ("Claude", "Claude"),
        ("Gemini", "Gemini"),
        ("DeepSeek", "DeepSeek"),
        ("Mistral", "Mistral"),
        ("Groq", "Groq"),
        ("Cohere", "Cohere"),
        ("Anthropic", "Anthropic"),
        ("Yi", "Yi"),
        ("LLaMA", "LLaMA"),
    ]

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    key = models.TextField()
    model = models.CharField(max_length=50, choices=MODEL_CHOICES)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} ({self.model})"
