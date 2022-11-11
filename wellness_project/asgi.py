"""
ASGI config for wellness_project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.1/howto/deployment/asgi/
"""

import os

from django.core.asgi import get_asgi_application

from channels.auth import AuthMiddlewareStack
from channels.routing import ProtocolTypeRouter, URLRouter

import wellness_app.routing


os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'wellness_project.settings')

application = ProtocolTypeRouter({
    # (http->django views is added by default)
    "http": get_asgi_application(),
    'websocket': AuthMiddlewareStack(
        URLRouter(
            wellness_app.routing.websocket_urlpatterns
        )
    ),
})
