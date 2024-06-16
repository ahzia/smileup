import { FaWindowClose } from "react-icons/fa";
import { useEffect } from "react";

export default function AIChat({ aiChatOpen, setAiChatOpen, aiChatVideoId, videosData }) {

    const sendMessageToAgent = (message) => {
        const sessionId = sessionStorage.getItem('df-messenger-sessionID');
        fetch(
            `https://dialogflow.cloud.google.com/v1/cx/integrations/messenger/webhook/projects/hey-buddy-425118/agents/565449f1-c5bd-40c2-8457-295ce6ae892d/sessions/${sessionId}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    queryInput: {
                        text: {
                            text: message,
                        },
                        languageCode: 'en',
                    },
                    queryParams: {
                        channel: 'DF_MESSENGER',
                    },
                }),
            },
        )
            .then((data) => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };
    useEffect(() => {
        console.log("aicha", aiChatVideoId, aiChatOpen, videosData)
        if (aiChatVideoId && aiChatOpen) {
            const video = videosData.find((video) => video.id === aiChatVideoId);
            console.log("here reached", video)
            if (video) {
                sendMessageToAgent(`{agent="smileUp", userName: "Ahmad", projectName: "${video.title}", projectDescription: "${video.description}"}`);
            }
        }
    }, [aiChatVideoId, aiChatOpen]);

    return (
        aiChatOpen && (<div className="h-[600px] w-full fixed bottom-[48px] z-20">
            <FaWindowClose className="fixed right-0 bottom-[650px] text-4xl text-[#20C997] rounded-full" onClick={() => setAiChatOpen(false)} />
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

        </div>)
    )
}