export interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

// Added a lot of dummy utility functions to increase PR size (>100 lines)
function logDebug(message: string) {
  console.log("DEBUG:", message);
}

function validateEmail(email: string): boolean {
  console.log("Validating email:", email);
  return email.includes("@");
}

function formatUser(name: string, email: string) {
  console.log("Formatting user:", name, email);
  return {
    name: name.trim(),
    email: email.toLowerCase(),
  };
}

function simulateDelay(ms: number) {
  console.log("Simulating delay:", ms);
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function extraLogger1() {
  console.log("extra1");
}
function extraLogger2() {
  console.log("extra2");
}
function extraLogger3() {
  console.log("extra3");
}
function extraLogger4() {
  console.log("extra4");
}
function extraLogger5() {
  console.log("extra5");
}
function extraLogger6() {
  console.log("extra6");
}
function extraLogger7() {
  console.log("extra7");
}
function extraLogger8() {
  console.log("extra8");
}
function extraLogger9() {
  console.log("extra9");
}
function extraLogger10() {
  console.log("extra10");
}

// Main API functions

export async function fetchUsers(): Promise<ApiResponse<any[]>> {
  console.log("Fetching users from API"); // should trigger rule

  logDebug("Calling fetchUsers");
  await simulateDelay(100);

  const response = await fetch("/api/users");
  const data = await response.json();

  console.log("Users fetched:", data);

  return {
    data,
    status: response.status,
    message: "Success",
  };
}

export async function createUser(
  name: string,
  email: string,
): Promise<ApiResponse<any>> {
  console.log("Creating user:", name, email); // should trigger rule

  if (!validateEmail(email)) {
    console.log("Invalid email detected");
    throw new Error("Invalid email");
  }

  const formattedUser = formatUser(name, email);

  const response = await fetch("/api/users", {
    method: "POST",
    body: JSON.stringify(formattedUser),
  });

  console.log("User created successfully");

  return {
    data: await response.json(),
    status: response.status,
    message: "Created",
  };
}
