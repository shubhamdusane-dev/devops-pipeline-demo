const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>DevOps Pipeline</title>
            <style>
                body {
                    font-family: Arial;
                    text-align: center;
                    padding-top: 100px;
                    background: #f2f2f2;
                }

                .box {
                    background: white;
                    padding: 40px;
                    margin: auto;
                    width: 500px;
                    border-radius: 15px;
                    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
                }

                h1 {
                    color: #333;
                }

                p {
                    color: #555;
                    font-size: 18px;
                }
            </style>
        </head>

        <body>

            <div class="box">

                <h1>🚀 DevOps Pipeline</h1>

                <p>End-to-End DevOps Practical</p>

                <p>GitHub + GitHub Actions + Docker</p>

                <p>✅ Application Running Successfully</p>

            </div>

        </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

