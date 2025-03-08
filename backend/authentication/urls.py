from django.urls import path
from .views import register_user, login_user , testLogin, getUserDetail
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path('register/', register_user, name='register'),
    path('login/', login_user, name='login'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('test/', testLogin, name='test-login'),
    path("getuser/",getUserDetail)
]
