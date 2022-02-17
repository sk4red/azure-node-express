module.exports = {
    branches: ["main","master"],
    repositoryUrl: "https://github.com/sk4red/azure-node-express",
    plugins: [
      "@semantic-release/commit-analyzer",
      "@semantic-release/release-notes-generator",
      [
        "@semantic-release/github",
        {
          assets: [
            { path: "build.zip", label: "Build" }
         
          ]
        }
      ]
    ]
  };