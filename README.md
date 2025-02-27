
# Vite React Project with AWS API Gateway Integration  

This project is built using Vite and React for the frontend, with an AWS API Gateway setup for backend communication. The frontend is located in the `frontend` folder, while the `APIGateway` folder contains a Lambda function (`getUser.js`) that connects to the frontend through an API URL.  

---

## Project Structure  

```
├── frontend
│   ├── public
│   ├── src
│   ├── package.json
│   └── vite.config.js
└── APIGateway
    └── getUser.js (Lambda function not useful but connected via API Gateway)
```

---

## Prerequisites  

- Node.js and npm installed  
- AWS Account with API Gateway and Lambda setup  

---

## Installation  

1. **Navigate to the frontend folder:**  
    ```bash
    cd frontend
    ```

2. **Install dependencies:**  
    ```bash
    npm install
    ```

---

## Configuration  

1. **Add API Gateway URL:**  

   In your frontend code, update the API URL to point to your AWS API Gateway endpoint for `getUser.js`.  

   Example:  
   ```js
   const apiUrl = 'https://your-api-gateway-url.amazonaws.com/getUser';
   ```

2. **CORS Configuration:**  
   Ensure CORS is correctly configured on your API Gateway for the frontend to communicate with the backend.  
   Refer to the official AWS documentation for CORS configuration:  
   [CORS with AWS API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-cors.html)  

---

## Running the Project  

To run the frontend locally, use the following command:  

```bash
npm run dev
```

This will start the Vite development server, and the application will be accessible at `http://localhost:5173` (default Vite port).  

---

## Deployment  

- **Frontend:** Deploy the React app using any static hosting service (e.g., Vercel, Netlify, AWS S3).  
- **Backend:** The `getUser.js` Lambda function is connected through the AWS API Gateway URL.  

---

## References  

- [CORS with AWS API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-cors.html) – Official AWS documentation on setting up CORS.  
- [Axios Response Schema](https://axios-http.com/docs/res_schema) – Detailed explanation of the Axios response structure.  

---

## Notes  

- The `getUser.js` Lambda function is currently not useful but is connected to the frontend via an API URL from AWS API Gateway.  
- Ensure the API Gateway URL is correctly added in the frontend for the application to work as expected.  

---

## License  

This project is licensed under the MIT License.  
