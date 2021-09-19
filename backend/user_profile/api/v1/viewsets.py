from rest_framework import authentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from user_profile.models import Profile
from .serializers import (
    ProfileSerializer,
)
from rest_framework import viewsets


class ProfileViewSet(viewsets.ModelViewSet):
    serializer_class = ProfileSerializer
    authentication_classes = (
        authentication.TokenAuthentication,
        authentication.SessionAuthentication,
    )
    permission_classes = [IsAuthenticated]
    queryset = Profile.objects.all()

    def get_queryset(self):
        queryset = Profile.objects.search(self.kwargs,request=self.request, params=self.request.query_params, )
        return queryset

    def get_serializer_context(self):
        context = super().get_serializer_context()
        return context


class UserProfileView(APIView):
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [IsAuthenticated, ]

    def get(self, request, format=None):
        user = request.user
        profile_serializer = ProfileSerializer(user.profile)
        res = {
            'id': user.id,
            'fullname': user.first_name + ' ' + user.last_name,
            'username': user.username,
            'profile': profile_serializer.data
        }
        return Response({'result': res})
