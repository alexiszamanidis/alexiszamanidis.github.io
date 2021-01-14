## ALEXISZAMANIDIS.GITHUB.IO

![Node.js CI/CD](https://github.com/alexiszamanidis/alexiszamanidis.github.io/workflows/Node.js%20CI/CD/badge.svg)

A minimal Portfolio Web page developed using **React JS, TypeScript and Material-UI**. It is deployed with **GitHub pages** and uses GitHub API to fetch my Personal Data and my Projects.

![app_diagram](https://user-images.githubusercontent.com/48658768/93704793-cd4b2280-fb20-11ea-8828-9995b23adc8d.png)

### Docker

You can run my Application in a Docker by running the script `runDocker.sh`

```
<!-- Default -->
./runDocker.sh

<!-- Custom Example -->
./runDocker.sh -p 3001 -i alexis-zamanidis -t 2
```

**Flags**

| Name  | Flag | Default |
| ----- | ---- | ------- |
| PORT  | \-p  | 3000    |
| IMAGE | \-i  | docker  |
| TAG   | \-t  | 1       |

You can check out my **old Portfolio Page** [**here**](https://alexiszamanidis.github.io/old_portfolio)
