import React from 'react';


const data = [
    { id: 1, question: 'what is `cors`?', ans: 'Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.An example of a cross-origin request: the front-end JavaScript code served from https://domain-a.com uses XMLHttpRequest to make a request for https://domain-b.com/data.json.For security reasons, browsers restrict cross-origin HTTP requests initiated from scripts. For example, XMLHttpRequest and the Fetch API follow the same-origin policy. This means that a web application using those APIs can only request resources from the same origin the application was loaded from unless the response from other origins includes the right CORS headers' },
    { id: 2, question: 'Why are you using `firebase`? What other options do you have to implement authentication?', ans: ' Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.Firebase Authentication integrates tightly with other Firebase services, and it leverages industry standards like OAuth 2.0 and OpenID Connect, so it can be easily integrated with your custom backend.' },
    { id: 3, question: 'How does the private route work?', ans: 'The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.' },
    { id: 4, question: 'What is Node? How does Node work?', ans:'It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensiv' },
    
]

const Blogs = () => {
    return (
        <div>
            {
                data.map((question,index) => 
                    <div className='mx-auto w-[85%] border p-6 text-start'>
                        <h2 className='font-bold text-2xl mb-3'>0{index + 1}. {question.question}</h2>
                        <p className=''>Answer : { question.ans}</p>
                    </div>
                    )
            }
        </div>
    );
};

export default Blogs;