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
