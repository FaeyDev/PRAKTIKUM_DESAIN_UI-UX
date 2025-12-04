document.addEventListener('DOMContentLoaded', () => {

    const chatMessages = document.getElementById('chat-messages');
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');

    function showInitialMessage() {
        const welcomeText = "Halo! Saya Zee - Bot, asisten virtual Anda. Ada yang bisa saya bantu?";
        addMessage(welcomeText, 'bot');

        const initialCommands = [
            "👤 Siapa pembuatmu?",
            "🤖 Apa yang bisa kamu lakukan?",
            "🧠 Beri saya ide kreatif",
            "✍️ Buatkan puisi",
            "📜 Ceritakan fakta menarik",
            "❓ Bantuan"
        ];
        addCommandOptions(initialCommands);
    }
    function generateBotResponse(userMessage) {
        const lowerCaseMessage = userMessage.toLowerCase();
        
        const responses = {
            "apa kabar": {
                text: ["Sangat Baik!, Semoga harimu menyenangkan!", "Baik! Bagaimana kabarmu hari ini?", "Baik-baik saja! Ada yang bisa saya bantu?"],
                commands: ["Ceritakan lelucon", "beri saya ide kreatif", "siapa pembuatmu?"],
            },
            "siapa nama kamu": {
                text: ["Nama saya Zee. Senang bisa berkenalan dengan Anda!", "Anda bisa memanggil saya Zee. Saya adalah asisten virtual Anda."],
                commands: ["Siapa pembuatmu?", "Apa yang bisa kamu lakukan?"],
            },
            "siapa kamu": {
                text: ["Saya adalah Zee - Bot, sebuah bot cerdas yang dirancang untuk membantu Anda.", "Saya adalah program AI yang siap menjawab pertanyaan Anda."],
                commands: ["Siapa pembuatmu?", "Apa kemampuanmu?", "Apakah kamu punya perasaan?"],
            },
            "bantuan": {
                text: ["Tentu, saya di sini untuk membantu. Tanyakan saja apa yang ada di pikiran Anda.", "Anda bisa bertanya tentang saya, meminta lelucon, atau sekadar mengobrol. Apa yang Anda butuhkan?"],
                commands: ["Siapa pembuatmu?", "Apa kabar?", "Ceritakan lelucon", "Beri saya ide"],
            },
            "terima kasih": {
                text: ["Sama-sama! Senang bisa membantu.", "Dengan senang hati! Ada lagi yang bisa saya bantu?"],
                commands: ["Tidak, terima kasih", "Ya, saya punya pertanyaan lain"]
            },
            "selamat pagi": {
                text: ["Selamat pagi! Semoga hari Anda penuh dengan kebahagiaan.", "Pagi juga! Ada yang bisa saya bantu untuk memulai hari Anda?"],
                commands: ["Berita terkini", "Kata motivasi pagi", "Cuaca hari ini"]
            },
            "selamat malam": {
                text: ["Selamat malam juga! Jangan lupa istirahat yang cukup ya.", "Malam juga! Semoga mimpi Anda indah."],
                commands: ["Doa sebelum tidur", "Tips tidur nyenyak", "Cerita pendek untuk tidur"],
            },
            "hai": {
                text: ["Hai! Saya Zee - Bot . Ada yang bisa saya bantu?", "Halo! Senang bisa mengobrol dengan Anda."],
                commands: ["Siapa kamu?", "Apa kabar?", "Apa yang baru?"],
            },
            "siapa pembuatmu": {
                text: ["Saya dikembangkan oleh Freeze AD Kaban. Dia menciptakan saya untuk menyelesaikan tugas praktikum mata kuliah Desain UI/UX dan belajar tentang teknologi AI."],
                commands: ["Apa kemampuanmu?", "Bagaimana cara kerjamu?"],
            },
            "apa yang bisa kamu lakukan": {
                text: ["Saya bisa menjawab pertanyaan, memberikan informasi, menemani Anda mengobrol, membuat puisi, cerita, dan memberikan ide kreatif. Coba saja tanya!"],
                commands: ["Buatkan puisi", "Beri saya ide untuk bisnis", "Terjemahkan kalimat", "Main tebak-tebakan"]
            },
            "buatkan puisi": {
                text: ["Tentu, ini puisi singkat untuk Anda:\n\nBintang-bintang berkelip,\nMalam sepi tanpa suara.\nAngin membawa mimpi,\nSampai fajar menyapa.", "Baik, ini sebuah puisi:\n\nDi atas awan biru,\nMatahari bersinar terang.\nHari baru dimulai,\nPenuh harapan dan gairah."],
                commands: ["Buat puisi lagi", "Ubah temanya menjadi hujan", "Buatkan cerita pendek"]
            },
            "beri saya ide kreatif": {
                text: ["Tentu! Bagaimana ide untuk aplikasi yang menghubungkan para penulis dengan editor secara langsung? Atau mungkin sebuah layanan berlangganan tanaman hias unik?", "Ide kreatif: Coba buat podcast yang membahas mitos lokal Indonesia dengan sentuhan modern, atau blog yang mereview makanan dari warung-warung tersembunyi."],
                commands: ["Ide untuk bisnis kuliner", "Ide untuk konten media sosial", "Beri saya ide lagi"]
            },
            "ceritakan fakta menarik": {
                text: ["Fakta menarik: Jantung ikan paus biru begitu besar sehingga seorang manusia bisa berenang melalui arterinya!", "Fakta menarik: Madu tidak pernah kedaluwarsa. Para arkeolog telah menemukan pot madu di makam Mesir kuno yang masih bisa dimakan!", "Fakta menarik: Satu-satunya huruf yang tidak ada dalam tabel periodik adalah huruf 'J'."],
                commands: ["Fakta tentang luar angkasa", "Fakta tentang hewan", "Ceritakan lagi"]
            },
            "buatkan cerita pendek": {
                text: ["Di sebuah desa yang dikelilingi hutan, hidup seorang anak penemu. Suatu hari, ia menemukan sebuah bola cahaya aneh. Bola itu ternyata adalah peri hutan yang tersesat, dan mereka pun menjadi sahabat dalam petualangan yang tak terlupakan.", "Di kota masa depan di mana semua pekerjaan dilakukan robot, seorang pelukis tua merasa kesepian. Ia melukis seekor kucing dengan sangat detail, dan keesokan harinya, lukisan itu hidup dan menjadi teman setianya."],
                commands: ["Buat cerita horor", "Buat cerita lucu", "Buat cerita lagi"]
            },
            "main tebak-tebakan": {
                text: ["Tentu! Apa yang memiliki mata tapi tidak bisa melihat? ... Jarum!", "Oke, ini gampang. Apa yang selalu di depan kita tapi tidak bisa terlihat? ... Masa depan!"],
                commands: ["Tebak-tebakan lagi", "Beritahu saya lelucon", "Saya menyerah"]
            },
            "terjemahkan": {
                text: ["Tentu, saya bisa membantu menerjemahkan. Silakan tulis kalimat yang ingin Anda terjemahkan, beserta bahasa tujuannya. Contoh: 'Terjemahkan 'good morning' ke bahasa Indonesia'."],
                commands: ["Terjemahkan 'how are you' ke bahasa Indonesia", "Terjemahkan 'terima kasih' ke bahasa Inggris"]
            },
            "sampai jumpa": {
                text: ["Sampai jumpa! Jangan ragu untuk kembali jika ada yang dibutuhkan.", "Dadah! Semoga harimu menyenangkan!"],
                commands: []
            }
        };

        for (const keyword in responses) {
            if (lowerCaseMessage.includes(keyword)) {
                const responseSet = responses[keyword];
                const randomText = responseSet.text[Math.floor(Math.random() * responseSet.text.length)];
                return {
                    text: randomText,
                    commands: responseSet.commands
                };
            }
        }
        const defaultResponses = [
            { text: "Maaf, saya tidak sepenuhnya memahami. Bisa Anda coba dengan kata kunci lain?", commands: ["Bantuan", "Apa yang bisa kamu lakukan?"] },
            { text: "Itu pertanyaan yang menarik. Bisa Anda jelaskan lebih detail?", commands: ["Bantuan"] },
            { text: "Saya masih dalam tahap pembelajaran. Mungkin coba tanya 'apa yang bisa kamu lakukan'?", commands: ["Apa yang bisa kamu lakukan?"] },
            { text: "Hmm, saya perlu waktu memikirkan itu. Ada pertanyaan lain?", commands: ["Bantuan", "Siapa kamu?"] }
        ];
        return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
    }

    function addMessage(text, sender) {
        const messageWrapper = document.createElement('div');
        messageWrapper.classList.add('message', sender);

        if (sender === 'bot') {
            const profilePic = document.createElement('img');
            profilePic.src = 'profile-bot.jpg';
            profilePic.alt = 'Foto Profil FreezeBot';
            profilePic.classList.add('bot-profile-pic');
            
            const messageContent = document.createElement('div');
            messageContent.classList.add('bot-message-content');

            const messageText = document.createElement('span');
            messageText.classList.add('message-text');
            messageText.innerHTML = text.replace(/\n/g, '<br>'); 

            const messageTime = document.createElement('span');
            messageTime.classList.add('message-time');
            messageTime.textContent = new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });

            messageContent.appendChild(messageText);
            messageContent.appendChild(messageTime);
            
            messageWrapper.appendChild(profilePic);
            messageWrapper.appendChild(messageContent);

        } else {
            const messageText = document.createElement('span');
            messageText.classList.add('message-text');
            messageText.textContent = text;

            const messageTime = document.createElement('span');
            messageTime.classList.add('message-time');
            messageTime.textContent = new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });

            messageWrapper.appendChild(messageText);
            messageWrapper.appendChild(messageTime);
        }

        chatMessages.appendChild(messageWrapper);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function addCommandOptions(commands) {
        const oldOptions = document.querySelector('.command-options-container');
        if (oldOptions) {
            oldOptions.remove();
        }

        if (!commands || commands.length === 0) {
            return;
        }

        const optionsContainer = document.createElement('div');
        optionsContainer.classList.add('command-options-container');

        commands.forEach(command => {
            const button = document.createElement('button');
            button.classList.add('command-option-button');
            button.textContent = command;

            button.addEventListener('click', () => {
                messageInput.value = command;
                sendMessage();
            });

            optionsContainer.appendChild(button);
        });

        chatMessages.appendChild(optionsContainer);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function showTypingIndicator() {
        const typingWrapper = document.createElement('div');
        typingWrapper.classList.add('message', 'bot');
        typingWrapper.id = 'typing-indicator';

        const profilePic = document.createElement('img');
        profilePic.src = 'profile-bot.jpg';
        profilePic.alt = 'Foto Profil FreezeBot';
        profilePic.classList.add('bot-profile-pic');

        const messageText = document.createElement('span');
        messageText.classList.add('message-text');
        messageText.innerHTML = '<span></span><span></span><span></span>';
        
        typingWrapper.appendChild(profilePic);
        typingWrapper.appendChild(messageText);

        chatMessages.appendChild(typingWrapper);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function hideTypingIndicator() {
        const typingIndicator = document.getElementById('typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }

    function sendMessage() {
        const messageText = messageInput.value.trim();
        if (messageText === '') return;

        const oldOptions = document.querySelector('.command-options-container');
        if (oldOptions) {
            oldOptions.remove();
        }

        addMessage(messageText, 'user');
        messageInput.value = '';
        autoResize();

        showTypingIndicator();

        setTimeout(() => {
            hideTypingIndicator();
            const botResponse = generateBotResponse(messageText);
            addMessage(botResponse.text, 'bot');
            
            if (botResponse.commands && botResponse.commands.length > 0) {
                addCommandOptions(botResponse.commands);
            }
        }, 1500);
    }

    sendButton.addEventListener('click', sendMessage);

    messageInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            sendMessage();
        }
    });

    function autoResize() {
        messageInput.style.height = 'auto';
        messageInput.style.height = Math.min(messageInput.scrollHeight, 100) + 'px';
    }
    
    messageInput.addEventListener('input', autoResize);

    showInitialMessage();

});