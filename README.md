1. Markdown
2. # RESTful API Activity - [Your Name]
3. ## Best Practices Implementation
4. **1. Environment Variables:**
5. - Why did we put `BASE_URI` in `.env` instead of hardcoding it?
6. - Answer: Its better to put the BASE_URI ing .env because we can change the URI in different environments without modifying the codes. Also, it keeps sensitive settings separate from the codebase and makes deployment easier.
7. **2. Resource Modeling:**
8. - Why did we use plural nouns (e.g., `/dishes`) for our routes?
9. - Answer: It makes the APIS predictable and intuitive. like /dishes respresents as a collection of dish resources. 
10. **3. Status Codes:**
11. - When do we use `201 Created` vs `200 OK`?
12. - Answer: We used 201 when a new resource successfully created and should include in the resource body. While 200 used when operations/requests was succeeds but doesn't create any new resources.

13. - Why is it important to return `404` instead of just an empty array or a generic error?
14. - Answer: Its important to return 404, so it makes easier to the client to identify whether the   error is in the id/route instead of returned the 200 or empty that has no results/empty. 
15. **4. Testing:**
16. - (Paste a screenshot of a successful GET request here)