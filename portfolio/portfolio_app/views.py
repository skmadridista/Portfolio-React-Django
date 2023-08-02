from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.

def home_view(request):
    return render(request, 'portfolio_app/index.html')
##############################################################

import requests
from django.http import HttpResponseRedirect

from django.http import FileResponse

# from django.http import FileResponse
from django.views.decorators.csrf import csrf_exempt
import os

@csrf_exempt
def download_resume(request):
    # Path to the resume file on your server
    BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    resume_file_path = os.path.join(BASE_DIR, 'portfolio_app', 'static', 'portfolio_app','Sauban_python_resume.pdf')

    # Serve the file using FileResponse
    response = FileResponse(open(resume_file_path, 'rb'), as_attachment=True, filename="Sauban_python_resume.pdf")
    return response

##########################################################




from django.http import JsonResponse
import requests
import json


def project_list(request):
    github_username = 'skmadridista'
    access_token = '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'

    url = f'https://api.github.com/users/{github_username}/repos'
    headers = {'Authorization': f'token {access_token}'}

    response = requests.get(url, headers=headers)

    if response.status_code == requests.codes.ok:
        repos = json.loads(response.text)
        projects = []

        for repo in repos:
            project_name = repo['name']
            repo_url = repo['html_url']
            project_id = repo['id']

            # Fetch additional details for the repository
            repo_details_url = f'https://api.github.com/repos/{github_username}/{project_name}'
            repo_details_response = requests.get(repo_details_url, headers=headers)
            if repo_details_response.status_code == requests.codes.ok:
                repo_details = json.loads(repo_details_response.text)
                # Extract relevant information such as description and owner avatar URL
                description = repo_details['description']
                owner_avatar_url = repo_details['owner']['avatar_url']
            else:
                description = 'No description available'
                owner_avatar_url = ''

            projects.append({
                'id': project_id,
                'project_name': project_name,
                'repo_url': repo_url,
                'description': description,
                'owner_avatar_url': owner_avatar_url,
            })

        return JsonResponse(projects, safe=False)

    return HttpResponse("Failed to retrieve project list from GitHub.")
