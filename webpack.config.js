module.exports = {
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.feature'], // Allow .feature files to be imported
    },
    module: {
      rules: [
        {
          test: /\.feature$/,
          use: [
            {
              loader: '@badeball/cypress-cucumber-preprocessor/loader',
            },
          ],
        },
      ],
    },
  };
  