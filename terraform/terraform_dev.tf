
resource "aws_amplify_app" "dev" {
  name         = "Stackit-SDK-DEV"
  repository   = var.NEXT_PUBLIC_GITHUB_REPOSITORY
  access_token = var.GITHUB_ACCESS_TOKEN
  platform     = "WEB_COMPUTE"

  build_spec = <<-EOT
    version: 1
    frontend:
      phases:
        preBuild:
          commands:
            - yarn install
        build:
          commands:
            - yarn run build
      artifacts:
        baseDirectory: .next
        files:
          - '**/*'
      cache:
        paths:
          - node_modules/**/*
  EOT

  custom_rule {
    source = "/<*>"
    status = "404-200"
    target = "/index.html"
  }
}


resource "aws_amplify_branch" "master_dev" {
  app_id      = aws_amplify_app.dev.id
  branch_name = "main"
  stage       = "DEVELOPMENT"
  framework   = "Next.js - SSR"

  environment_variables = {
    NEXT_PUBLIC_DEFAULT_API_URL      = var.NEXT_PUBLIC_DEFAULT_API_URL
    NEXT_PUBLIC_GOOGLE_CLIENT_ID     = var.NEXT_PUBLIC_GOOGLE_CLIENT_ID
    NEXT_PUBLIC_GOOGLE_CLIENT_SECRET = var.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET
    NEXT_PUBLIC_AWS_S3_PROTOCOL      = var.NEXT_PUBLIC_AWS_S3_PROTOCOL
    NEXT_PUBLIC_AWS_S3_LINK          = var.NEXT_PUBLIC_AWS_S3_LINK
    NEXT_PUBLIC_GOOGLE_ANALYTICS_ID  = var.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID
    NEXT_PUBLIC_SMARTLOOK_API_KEY    = var.NEXT_PUBLIC_SMARTLOOK_API_KEY
  }
}