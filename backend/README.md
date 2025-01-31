# Card Issuing Backend

## Project Overview
This backend service is responsible for managing card issuing and user operations. It provides functionalities to create and update users, issue and manage cards, and handle transactions.

## Features
- Create users
- Update users
- Issue cards
- Activate cards
- Block cards
- Change card spending limits
- View transactions
- Process transactions via hooks

## Setup Instructions
1. Clone the repository:
    ```sh
    git clone https://github.com/your-repo/crypto-card.git
    cd crypto-card/backend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Set up environment variables:
    - Create a `.env` file in the [backend](http://_vscodecontentref_/1) directory and add the required environment variables as shown in the `.env.example` file.

4. Start the development server:
    ```sh
    npm run start:dev
    ```

## Usage Instructions
- To create a user, send a POST request to `/users` with the user details.
- To update a user, send a PUT request to `/users/:id` with the updated details.
- To issue a card, send a POST request to `/cards` with the card details.
- To activate a card, send a POST request to `/cards/:id/activate`.
- To block a card, send a POST request to `/cards/:id/block`.
- To change card spending limits, send a PUT request to `/cards/:id/limits` with the new limits.
- To view transactions, send a GET request to `/transactions`.
- To process transactions via hooks, set up the webhook URL in your Stripe dashboard.

## Contribution Guidelines
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

## License Information
This project is licensed under the MIT License. See the LICENSE file for more details.