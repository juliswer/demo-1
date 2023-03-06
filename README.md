<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
<br />

<div align="center">
  <a href="https://github.com/stackitgroup/stackit-sdk-nextjs">
    <img src="public/stackitAppLogo.svg" alt="Logo">
  </a>

<h3 align="center">StackIt SDK</h3>

  <p align="center">
    Next.js. v0.0.1
    <br />
    <!-- TODO: add documentation -->
    <p>↓ Explore the docs ↓</p>
    <a href="https://docs.google.com/document/d/1lb5mbdpTvPCZUgh3xrR-pTD4F1fHAKgfGOXrbhag_0Q/edit">Stackit SDK Guide<strong></strong></a>
    <a href="https://docs.google.com/document/d/1vFZfCGlIZfD-6ub_qdUsBFVvjLAGnMoJVKtdeOgYu1s/edit?usp=sharing">Terraform Guide<strong></strong></a>
    <br />
    <br />
    <!-- TODO: add demo video -->
    <a href="https://github.com/stackitgroup/stackit-sdk-nextjs">View Demo</a>
  </p>
</div>

<!-- ABOUT THE PROJECT -->

## About The Project

A GitHub template can be a valuable tool when starting a new project. By using a template, many hours of work can be saved, as the template already includes a basic structure and predefined functionalities that fit the project's needs.

In the specific case of Stackit, a GitHub template can help the company speed up project development and ensure code quality and application functionality. By using an internal template, the company can customize the template to fit their needs and ensure internal standards and best practices are met.

### Built With

- [![Next][Next.js]][Next-url]
- [![Redux][Redux.js]][Redux-url]
- [![Jest][Jest.com]][Jest-url]
- [![TypeScript][TypeScript.com]][TypeScript-url]
- [![Terraform][Terraform.com]][Terraform-url]
- [![Tailwind][Tailwindcss.com]][Tailwind-url]

  <br />
  <br />

### Naming Convention and Folder Structure

<details>
  <summary>Common Folder</summary>

- Configuration
- - [fileName].config.ts
- Constants
- - [fileName].constants.ts
- Enums
- - [fileName].enum.ts
- Services
- - One on each folder (named as dash-case)
- - - [fileName].service.ts
- Types
- - [fileName].types.ts
- Utils
- - [fileName].util.ts

</details>
<details>
  <summary>Components Folder</summary>

- [CamelCaseFolder]
- - [CamelCaseFile].tsx

</details>

<details>
  <summary>Features Folder</summary>

- app
- - actions
- - - [myActionFolder]
- - - - [myActionFile].ts
- - - - [myActionFile].spec.ts
- - process
- - - commands
- - - - [myCommandFolder]
- - - - - [myCommandFile].command.ts
- - - - - [myCommandFile].command.spec.ts
- - - errors
- - - - [myCommand].errors.enum.ts
- - - command.type.ts
- - - create-command.stack.ts
- - services
- - - [myServiceFolder]
- - - - myServiceInterface.service.ts (for interfaces)
- - - - myService.service.mock.ts (for mocks)
- - - - myService.service.ts (for the service)
- - store
- - - app.slice.ts
- - - [myExtraReducer].extraReducers.ts
- - - - [extraReducerAction].ts (follow the structure)
- auth
- - Same that on app folder

</details>
<details>
  <summary>Images folder</summary>

- icons
- - [myIcon].[imageFormat]
- - - Note: If it's an image that will be used on many sites, just add it to the root path with dash-case.
      Otherwise, add a folder with the name of the page where it'll be used (in dash-case case as well) and add it.

</details>
<details>
  <summary>Layout:</summary>

- [MyFolder]
- - [MyFile].tsx
- Wrapper.tsx (required)

</details>
<details>
  <summary>Store:</summary>

- Hooks
- - [myHook].ts
- ui
- - ui.slice.ts
- store.ts
</details>
<details>
  <summary>Styles</summary>

- Globals css at the root path (using dash-case)
- Add a folder with the page where the style will be used and the file inside (both of them with dash-case)

</details>

<br />

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

1. Create a new repository from stackit-sdk-nextjs

   They will start with the same files and folders as [stackitgroup/stackit-sdk-nextjs.](https://github.com/stackitgroup/stackit-sdk-nextjs)

2. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
3. Install Yarn packages
   ```sh
   yarn install
   ```
4. Enter your APIs in `variables.tf`
   ```js
   variable "API_KEY" {
      type        = string
      default     = "ENTER YOUR API"
      description = "ENTER YOUR DESCRIPTION"
    }
   ```
5. Enter your API in `.env`
   ```js
   API_KEY = 'ENTER YOUR API'
   ```

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

[contributors-shield]: https://img.shields.io/badge/CONTRIBUTORS-4-orange
[contributors-url]: https://github.com/stackitgroup/stackit-sdk-nextjs/graphs/contributors
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[Redux.js]: https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white
[Redux-url]: reduxjs.org
[Jest.com]: https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white
[Jest-url]: https://jestjs.io/
[Tailwindcss.com]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[Tailwind-url]: https://tailwindcss.com/
[TypeScript.com]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://tailwindcss.com/
[Terraform.com]: https://img.shields.io/badge/Terraform-7B42BC?style=for-the-badge&logo=terraform&logoColor=white
[Terraform-url]: https://www.terraform.io/
