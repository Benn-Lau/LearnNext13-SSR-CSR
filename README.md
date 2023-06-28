# Build and Deploy a Modern Next.js 13 Application | React, Next JS 13, TypeScript, Tailwind CSS

I hope I learn something from this project
If you want to Know how all of this works check the links out:
This is a project from javascript mastery ,  
 Link: [Youtube video](https://youtu.be/pUNSHPyVryU)

For **OG code** with explanation : [GitHub Repo](https://github.com/adrianhajdin/project_next13_car_showcase/tree/main)

## What I learn from this project

- How to set up env variables
- Bundling Environment Variables for the Browser
- How to set up to call API using HTTPS
- How to write Markdown
- From Server Side render to Client Side Render

## Before you clone this repo READ THIS:
This is a project I learn from [Youtuber Javascript Mastery](https://www.youtube.com/@javascriptmastery) . He has a [Git Repo](https://github.com/adrianhajdin/project_next13_car_showcase) for this project which I simply just learn from his video , edit some of his mistake and learn from it , I love his dedication so please support him !! **-- end --**

## Where is Client Side Render ?
Check out the branches , the client side render version is in another branch . The main brach is server side render .
## How to set up .env ?

Create a file named .env in the root directory of your project.
Define your environment variables in the .env file using the KEY=VALUE format. For example:

```
API_KEY=your_api_key
DATABASE_URL=your_database_url
```

Make sure not to commit the .env file to version control systems like Git, as it may contain sensitive information.

In your application code or development setup, you can access these variables by using a library or method to load the contents of the .env file into your application's environment.

(by GPT-3)

### Problem occurs for me when Image cannot load cause by unable to load env variables

- Solution : Bundling Environment Variables for the Browser
- the problem occurs cause the browser cannot read environment variables , I change the env variable to follow next js docs - read .env variables

### Learning Markdown

- double space to have a soft break
- CTRL + SHIFT + V to view the Markdown

### .env variables

- remember to use NEXT*PUBLIC* read more in '[Next's documentation](https://nextjs.org/docs/app/building-your-application/configuring/environment-variables#bundling-environment-variables-for-the-browser)'

![Alt text](/public/github.svg "GitHub LOGO")

  <!-- Link bruh so ugly -->

## Whats if there is a problem?
I don't care but if you need my help just go to the

## Bug in this application causing scroll resetting

more info on git hub link: [Link](https://github.com/vercel/next.js/issues/49087)

note: this is not my fault its next js team ... I hope it fix 24/06/23 20:03

note: the Client Side Rendering fix this issue but it comes at a cost for the **url params not working** so its fine!!
