import type { APIRoute } from "astro";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    // Handle both JSON and FormData submissions
    const contentType = request.headers.get("content-type") || "";
    let data: any;

    if (contentType.includes("application/json")) {
      const text = await request.text();
      if (!text || text.trim() === "") {
        throw new Error("Empty request body");
      }
      data = JSON.parse(text);
    } else if (
      contentType.includes("application/x-www-form-urlencoded") ||
      contentType.includes("multipart/form-data")
    ) {
      const formData = await request.formData();
      data = Object.fromEntries(formData.entries());
    } else {
      // Fallback: try to get text and parse
      const text = await request.text();
      if (!text || text.trim() === "") {
        throw new Error("Empty request body");
      }
      data = JSON.parse(text);
    }

    // Validate required fields
    const { name, email, phone } = data;

    if (!name || !email || !phone) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Name, email, and phone are required fields",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Invalid email address",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    // TODO: Integrate with GoHighLevel API
    // For now, we'll log the submission and return success
    // In production, you would:
    // 1. Get GHL API credentials from environment variables
    // 2. POST to GHL webhook/API endpoint
    // 3. Handle GHL response and errors

    console.log("Lead submission received:", {
      name,
      email,
      phone,
      address: data.address,
      city: data.city,
      message: data.message,
      timestamp: new Date().toISOString(),
    });

    // Simulate API call delay
    // await new Promise(resolve => setTimeout(resolve, 500));

    // Example GHL integration (commented out - add your credentials):
    /*
    const GHL_WEBHOOK_URL = import.meta.env.GHL_WEBHOOK_URL;
    const GHL_API_KEY = import.meta.env.GHL_API_KEY;
    
    if (!GHL_WEBHOOK_URL) {
      throw new Error('GHL_WEBHOOK_URL not configured');
    }
    
    const ghlResponse = await fetch(GHL_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GHL_API_KEY}`
      },
      body: JSON.stringify({
        contact: {
          name,
          email,
          phone,
          address: data.address,
          city: data.city || 'Salt Lake City',
          customField: {
            message: data.message
          }
        },
        tags: ['website-lead', 'water-audit-request']
      })
    });
    
    if (!ghlResponse.ok) {
      throw new Error('Failed to submit to GHL');
    }
    */

    // Return success response
    return new Response(
      JSON.stringify({
        success: true,
        message: "Your request has been received. We'll contact you shortly!",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    );
  } catch (error) {
    console.error("Lead submission error:", error);

    return new Response(
      JSON.stringify({
        success: false,
        error:
          "An error occurred processing your request. Please try again or call us directly.",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
};

// Handle GET requests (optional - for testing)
export const GET: APIRoute = async () => {
  return new Response(
    JSON.stringify({
      message: "Lead submission endpoint. Use POST to submit leads.",
      requiredFields: ["name", "email", "phone"],
      optionalFields: ["address", "city", "message"],
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    },
  );
};
