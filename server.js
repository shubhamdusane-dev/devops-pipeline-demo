const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">

            <title>DevOps Project</title>

            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                    font-family: Arial, sans-serif;
                }

                body {
                    background: #f5f7fb;
                    color: #1f2937;
                }

                nav {
                    background: #111827;
                    color: white;
                    padding: 20px 8%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                nav h2 {
                    font-size: 22px;
                }

                nav a {
                    color: white;
                    text-decoration: none;
                    margin-left: 25px;
                }

                .hero {
                    text-align: center;
                    padding: 90px 20px;
                    background: white;
                }

                .hero h1 {
                    font-size: 48px;
                    margin-bottom: 20px;
                }

                .hero p {
                    font-size: 18px;
                    color: #6b7280;
                    margin-bottom: 30px;
                }

                .button {
                    display: inline-block;
                    background: #2563eb;
                    color: white;
                    padding: 14px 30px;
                    border-radius: 6px;
                    text-decoration: none;
                }

                .cards {
                    display: flex;
                    justify-content: center;
                    gap: 25px;
                    padding: 60px 8%;
                    flex-wrap: wrap;
                }

                .card {
                    background: white;
                    width: 280px;
                    padding: 30px;
                    border-radius: 10px;
                    text-align: center;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.08);
                }

                .card h3 {
                    margin-bottom: 15px;
                }

                .card p {
                    color: #6b7280;
                    line-height: 1.6;
                }

                footer {
                    background: #111827;
                    color: white;
                    text-align: center;
                    padding: 20px;
                }
            </style>
        </head>

        <body>

            <nav>
                <h2>DevOps Project</h2>

                <div>
                    <a href="/">Home</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </div>
            </nav>

            <section class="hero">

                <h1>Welcome to My Website</h1>

                <p>
                    A modern web application powered by DevOps.
                </p>

                <a href="#" class="button">
                    Get Started
                </a>

            </section>

            <section class="cards">

                <div class="card">
                    <h3>GitHub</h3>

                    <p>
                        Source code is managed using GitHub
                        and version control.
                    </p>
                </div>

                <div class="card">
                    <h3>Docker</h3>

                    <p>
                        The application is packaged and
                        deployed using Docker.
                    </p>
                </div>

                <div class="card">
                    <h3>GitHub Actions</h3>

                    <p>
                        Automated workflows build and
                        deploy the application.
                    </p>
                </div>

            </section>

            <footer>
                <p>© 2026 DevOps Project</p>
            </footer>

        </body>

        </html>
    `);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});