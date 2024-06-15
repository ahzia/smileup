export default function AIChat({ aiChatOpen, setAiChatOpen }) {

    return (
        aiChatOpen && (
            <df-messenger
                project-id="hey-buddy-425118"
                agent-id="565449f1-c5bd-40c2-8457-295ce6ae892d"
                language-code="en"
                max-query-length="-1"
                allow-feedback="all"
            >
                <df-messenger-chat chat-title="SmileUp AI">
                </df-messenger-chat>
            </df-messenger>
        )
    )
}