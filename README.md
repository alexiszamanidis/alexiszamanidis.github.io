## ALEXISZAMANIDIS.GITHUB.IO

A minimal page developed using **React, Typescript** and deployed with **GitHub pages**.
It uses GitHub API to fetch my Personal Data and my Projects.

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
