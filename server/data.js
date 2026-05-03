let id_sequence = 11; // Starting ID for new tasks
const generateId = () => id_sequence++; // Function to generate unique IDs for new tasks

const generateDate = (date) => {
  if (!date) {
      date = new Date();
  }
  const formatted = new Date().toISOString()
  .replace('T', ' ')      // Replace T with space
  .substring(0, 19);     // Cut off the milliseconds and 'Z'
  return formatted;
}

const tasks = [
  {
    "id": 1,
    "name": "Configure Middleware",
    "owner": "hwl",
    "desc": "Implement logging and body-parsing middleware in the Express server to handle JSON and URL-encoded data.",
    "due": "2026-05-10 17:00:00",
    "created": "2026-05-03 09:00:00"
  },
  {
    "id": 2,
    "name": "Fix Path Error",
    "owner": "alex_dev",
    "desc": "Update catch-all route syntax from '*' to '/{*splat}' to resolve Express 5.x PathError compatibility issues.",
    "due": "2026-05-04 12:00:00",
    "created": "2026-05-03 10:15:00"
  },
  {
    "id": 3,
    "name": "Setup Static Assets",
    "owner": "sarah_m",
    "desc": "Serve React production build from the /client/dist directory using express.static middleware.",
    "due": "2026-05-06 18:00:00",
    "created": "2026-05-03 11:30:00"
  },
  {
    "id": 4,
    "name": "Convert to ESM",
    "owner": "jordan_tech",
    "desc": "Refactor CommonJS require statements to ES Module imports and ensure all local imports include .js extensions.",
    "due": "2026-05-05 14:00:00",
    "created": "2026-05-03 14:45:00"
  },
  {
    "id": 5,
    "name": "Test Nested Form Data",
    "owner": "emily_qa",
    "desc": "Verify that extended:true is set in urlencoded middleware to correctly parse nested objects like nested[name].",
    "due": "2026-05-07 09:00:00",
    "created": "2026-05-03 15:20:00"
  }
];

const users = [
  {
    "id": 6,
    "name": "Hwl User",
    "email": "hwl.dev@example.com",
    "phone": "+1-555-010-8899"
  },
  {
    "id": 7,
    "name": "Alex Rivera",
    "email": "alex.rivera@techflow.io",
    "phone": "+1-555-012-4455"
  },
  {
    "id": 8,
    "name": "Sarah Miller",
    "email": "s.miller@web-assets.net",
    "phone": "+1-555-019-3322"
  },
  {
    "id": 9,
    "name": "Jordan Taylor",
    "email": "j.taylor@esm-solutions.com",
    "phone": "+1-555-011-7766"
  },
  {
    "id": 10,
    "name": "Emily Chen",
    "email": "emily.qa@databridge.org",
    "phone": "+1-555-015-9900"
  }
];

export {tasks, users, generateId, generateDate};