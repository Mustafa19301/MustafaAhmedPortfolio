import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req) {
    try {
        // Parse the request data
        const { email, subject, message } = await req.json();

        // Send the email
        const { data, error } = await resend.emails.send({
            from: fromEmail,
            to: [email],
            subject: subject,
            html: `<p>${message}</p>`,  // Use HTML if plain text is not desired
        });

        if (error) {
            return new Response(JSON.stringify({ error }), { status: 500 });
        }

        return new Response(JSON.stringify(data), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}
