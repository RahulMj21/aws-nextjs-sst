// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "aws-nextjs",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
    };
  },
  async run() {
    new sst.aws.Nextjs("SstTestApp", {
      domain: {
        name:
          $app?.stage === "production"
            ? "sst-next.rahulmj21.com"
            : "sst-next-dev.rahulmj21.com",
        dns: false,
        cert:
          $app?.stage === "production"
            ? "arn:aws:acm:us-east-1:509399597527:certificate/8372e837-5fed-46fc-8028-0d5c39bb6d60"
            : "arn:aws:acm:us-east-1:509399597527:certificate/2236d5ca-f0de-4e58-8e84-54739c4fd625",
      },
    });
  },
});
