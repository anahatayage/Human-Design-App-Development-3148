export const generateAIResponse = async (message, chartData) => {
  // Simulate AI processing time
  await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));
  
  // This is a simplified AI response generator
  // In a real app, this would connect to an actual AI service like OpenAI
  
  const responses = generateContextualResponse(message, chartData);
  return responses[Math.floor(Math.random() * responses.length)];
};

const generateContextualResponse = (message, chartData) => {
  const lowerMessage = message.toLowerCase();
  
  if (!chartData) {
    return [
      "I'd love to help you understand your Human Design! However, I don't see your chart data yet. Please generate your chart first so I can provide personalized insights.",
      "To give you the most accurate guidance, I'll need to see your Human Design chart. Have you generated it yet?",
      "I'm here to help with your Human Design journey! Once you create your chart, I can provide detailed insights about your type, strategy, and authority."
    ];
  }
  
  // Type-related questions
  if (lowerMessage.includes('type') || lowerMessage.includes('energy')) {
    return getTypeResponses(chartData);
  }
  
  // Strategy-related questions
  if (lowerMessage.includes('strategy') || lowerMessage.includes('how should i')) {
    return getStrategyResponses(chartData);
  }
  
  // Authority-related questions
  if (lowerMessage.includes('authority') || lowerMessage.includes('decision') || lowerMessage.includes('choose')) {
    return getAuthorityResponses(chartData);
  }
  
  // Centers-related questions
  if (lowerMessage.includes('center') || lowerMessage.includes('defined') || lowerMessage.includes('undefined')) {
    return getCenterResponses(chartData);
  }
  
  // Profile-related questions
  if (lowerMessage.includes('profile') || lowerMessage.includes('line')) {
    return getProfileResponses(chartData);
  }
  
  // General life guidance
  if (lowerMessage.includes('life') || lowerMessage.includes('purpose') || lowerMessage.includes('guidance')) {
    return getGeneralGuidanceResponses(chartData);
  }
  
  // Relationships
  if (lowerMessage.includes('relationship') || lowerMessage.includes('partner') || lowerMessage.includes('love')) {
    return getRelationshipResponses(chartData);
  }
  
  // Career/work
  if (lowerMessage.includes('career') || lowerMessage.includes('work') || lowerMessage.includes('job')) {
    return getCareerResponses(chartData);
  }
  
  // Default responses
  return [
    `As a ${chartData.type}, your unique design offers many insights. What specific aspect of your Human Design would you like to explore further?`,
    `I see you're a ${chartData.type} with ${chartData.authority}. That's a powerful combination! What would you like to know more about?`,
    `Your ${chartData.profile} profile brings interesting themes to your life. Feel free to ask me about any aspect of your chart - your type, strategy, authority, or centers.`,
    `I'm here to help you understand your Human Design better. You can ask me about your strategy, how to make decisions, your defined centers, or anything else about your chart!`
  ];
};

const getTypeResponses = (chartData) => {
  const typeResponses = {
    'Manifestor': [
      `As a Manifestor, you're one of the initiators in this world! You have the natural ability to start things and make things happen. Your energy works in bursts - you initiate, then rest. Remember to inform others before you act to create peace and reduce resistance.`,
      `Your Manifestor energy is all about independence and initiation. You don't need permission to act, but informing others of your plans helps create smoother relationships. Trust your urges to start new things - that's your gift!`,
      `Being a Manifestor means you're designed to be a catalyst for change. Your energy can feel intense to others, which is why informing them of your actions is so important. You're here to initiate and impact, not to wait for others.`
    ],
    'Generator': [
      `As a Generator, you're the life force of the planet! Your sacral energy is incredibly powerful when you're engaged in work you love. The key is to respond to opportunities rather than trying to initiate. When something lights you up, that's your sacral saying "yes!"`,
      `Your Generator energy is sustainable and magnetic. You have the stamina to see things through when you're truly excited about them. Pay attention to your gut responses - they're your inner guidance system leading you toward satisfaction.`,
      `Being a Generator means you're designed to respond to life. When you follow your sacral responses and engage in work that excites you, you'll find deep satisfaction and success. Avoid forcing things that don't feel right.`
    ],
    'Manifesting Generator': [
      `As a Manifesting Generator, you're a hybrid with both initiating and responding capabilities! You can start things like a Manifestor and have the sustained energy of a Generator. Don't be afraid to take shortcuts or pivot when something no longer excites you.`,
      `Your MG energy is fast and efficient. You're multi-passionate and can handle multiple projects at once. The key is to follow your sacral responses while also informing others of your actions, especially when you change direction.`,
      `Being a Manifesting Generator means you're designed to respond quickly and act on what excites you. Your path may not be linear, and that's perfectly fine. Trust your ability to find efficient ways to get things done.`
    ],
    'Projector': [
      `As a Projector, you're a natural guide and leader! You have the gift of seeing the big picture and understanding how to guide others efficiently. Your strategy is to wait for recognition and invitations, which ensures your wisdom is valued and heard.`,
      `Your Projector energy is penetrating and wise. You can see things others miss and have natural management abilities. Focus on mastering your gifts and being visible in your expertise - the right invitations will come.`,
      `Being a Projector means you're designed to guide and direct others. You don't have consistent access to life force energy, so it's important to manage your energy wisely and wait for proper recognition before sharing your gifts.`
    ],
    'Reflector': [
      `As a Reflector, you're incredibly rare and special! You're designed to be a mirror for your community, reflecting back its health and energy. Your openness allows you to sample and amplify the energy around you.`,
      `Your Reflector energy is completely open and receptive. You need time to make decisions - ideally a full lunar cycle for major choices. You're here to experience life in all its variety and reflect wisdom back to others.`,
      `Being a Reflector means you're deeply connected to lunar cycles and your environment. Surround yourself with healthy people and places, as you'll reflect whatever energy you're around. Your perspective is unique and valuable.`
    ]
  };
  
  return typeResponses[chartData.type] || [`Your ${chartData.type} energy is unique and powerful. Would you like to know more about how to work with it?`];
};

const getStrategyResponses = (chartData) => {
  const strategyResponses = {
    'To Inform': [
      `Your strategy "To Inform" is crucial for creating peace in your life. Before you act, start new projects, or change direction, let the people who will be affected know what you're planning. This isn't asking permission - it's creating awareness.`,
      `Informing others before you act helps reduce resistance and creates smoother relationships. People appreciate being kept in the loop, especially when your actions might affect them. This simple practice can transform your interactions.`,
      `Remember, informing is about creating peace, not seeking approval. Share your plans with those who will be impacted, then follow through on your initiatives. This strategy helps others feel included rather than surprised by your actions.`
    ],
    'To Respond': [
      `Your strategy "To Respond" means waiting for something in your environment to respond to, then following your sacral guidance. Life will bring you opportunities - your job is to notice what excites you and what doesn't.`,
      `Responding doesn't mean being passive. It means being alert and aware, ready to recognize when something sparks your interest. Your sacral center will give you clear "yes" or "no" signals about what's worth your energy.`,
      `Trust the response strategy - it leads to satisfaction and success. When you try to initiate without something to respond to, you often hit resistance or frustration. Let life come to you, then respond with your full energy.`
    ],
    'To Wait for the Invitation': [
      `Your strategy "To Wait for the Invitation" ensures your gifts are recognized and valued. Focus on developing your expertise and being visible in what you do well. The right invitations will come when people see your value.`,
      `Waiting for invitations doesn't mean being inactive. Continue growing your skills, sharing your knowledge, and being present in your field. When people recognize your abilities, they'll naturally invite you to contribute.`,
      `The invitation strategy protects your energy and ensures you're working with people who appreciate you. Uninvited energy often meets resistance, but invited energy is welcomed and successful.`
    ],
    'To Wait a Lunar Cycle': [
      `Your strategy "To Wait a Lunar Cycle" means taking about 28 days for major decisions. This allows you to experience the decision from many different perspectives and energy states before committing.`,
      `Use the lunar cycle to sample different environments and see how you feel about the decision in various contexts. Your clarity will come through this extended process of experiencing and reflecting.`,
      `Don't rush big decisions. Your wisdom comes through time and varied experiences. What feels right today might feel different tomorrow, and that's valuable information for making the best choice.`
    ]
  };
  
  return strategyResponses[chartData.strategy] || [`Your strategy is ${chartData.strategy}. This is your key to living in alignment with your design.`];
};

const getAuthorityResponses = (chartData) => {
  const authorityResponses = {
    'Sacral Authority': [
      `Your Sacral Authority gives you access to powerful gut responses. Listen for the "uh-huh" (yes) or "unh-unh" (no) sounds that come from your sacral center. These responses happen before your mind gets involved.`,
      `Trust your sacral responses completely - they're never wrong for you. The challenge is learning to hear them and not override them with mental reasoning. Your gut knows what's correct for you.`,
      `Your sacral speaks in the present moment about present opportunities. It responds to "yes/no" questions and gives you immediate feedback about what will bring you satisfaction or frustration.`
    ],
    'Emotional Authority': [
      `Your Emotional Authority means you need to ride your emotional wave before making decisions. No decision should be made in the height of emotion - wait until you have clarity across different emotional states.`,
      `Your emotions are not obstacles - they're your decision-making process. Give yourself time to feel into decisions and notice how your feelings change over time. Clarity comes through this emotional journey.`,
      `"Sleep on it" is perfect advice for you. Major decisions need time to percolate through your emotional system. Trust that clarity will come when you've experienced the full emotional spectrum around the choice.`
    ],
    'Splenic Authority': [
      `Your Splenic Authority gives you intuitive, in-the-moment awareness. Your spleen speaks once and quietly - trust that first instinct and don't second-guess yourself.`,
      `Your intuition is incredibly accurate, but it's subtle. Pay attention to those quiet inner knowings, spontaneous insights, and gut feelings that arise in the moment. They're guiding you toward what's healthy and safe.`,
      `The spleen is about survival and well-being. When something doesn't feel right, trust that instinct immediately. Your splenic awareness is designed to keep you healthy and guide you toward what's beneficial.`
    ],
    'Ego Authority': [
      `Your Ego Authority means making decisions based on what you have the willpower and resources to commit to. Ask yourself: "Do I really want this?" and "Can I see this through?"`,
      `Your heart center guides you through desire and commitment. Only say yes to things you truly want and have the energy to complete. Your authority is about making promises you can keep.`,
      `Trust your heart's desires and your honest assessment of your capacity. Your ego authority is about authentic commitment - when you truly want something and can deliver on it, that's your green light.`
    ],
    'Self-Projected Authority': [
      `Your Self-Projected Authority means you need to hear yourself talk through decisions. The truth emerges when you speak about what you're considering - pay attention to how you sound.`,
      `Talk out loud about your decisions, either to trusted friends or even to yourself. Notice the tone of your voice, the energy behind your words, and what feels right when you speak about different options.`,
      `Your truth comes through your voice and self-expression. When you're talking about something that's correct for you, you'll hear it in how you sound. Trust what emerges through speaking.`
    ],
    'Mental Authority': [
      `Your Mental Authority means processing decisions through discussion with others. You gain clarity by talking through options with trusted advisors or friends who can offer different perspectives.`,
      `You're designed to think out loud and process information with others. Don't make decisions in isolation - seek out conversations that help you see all angles of a situation.`,
      `Your clarity comes through mental processing with others. The goal isn't to have others decide for you, but to use discussion as a way to access your own inner knowing about what's correct.`
    ],
    'Lunar Authority': [
      `Your Lunar Authority means waiting about 28 days for major decisions. This allows you to experience the decision from many different energy states and perspectives before committing.`,
      `Use the lunar cycle to sample how the decision feels in different environments and with different people. Your clarity will emerge through this extended process of experiencing and reflecting.`,
      `Don't rush big choices. Your wisdom comes through time and varied experiences. Notice how you feel about the decision as you move through different lunar phases and energy states.`
    ]
  };
  
  return authorityResponses[chartData.authority] || [`Your ${chartData.authority} is your inner decision-making compass. Trust this process for making correct choices.`];
};

const getCenterResponses = (chartData) => {
  const definedCount = chartData.definedCenters?.length || 0;
  const undefinedCount = 9 - definedCount;
  
  return [
    `You have ${definedCount} defined centers and ${undefinedCount} undefined centers. Your defined centers give you consistent, reliable energy and themes, while your undefined centers are where you take in and amplify the energy of others.`,
    `Your defined centers (${chartData.definedCenters?.join(', ') || 'none listed'}) are your areas of consistent energy. These centers operate reliably and represent themes you can count on in yourself.`,
    `Your undefined centers are not weaknesses - they're areas of wisdom and flexibility. You experience these centers through others and can become wise about how they operate by observing different expressions of their energy.`,
    `The balance between your defined and undefined centers creates your unique energetic signature. Defined centers are where you're consistent, undefined centers are where you're adaptable and wise through experience.`
  ];
};

const getProfileResponses = (chartData) => {
  return [
    `Your ${chartData.profile} profile brings specific themes to your life. The first number represents your conscious personality (how you see yourself), and the second number represents your unconscious design (how others see you).`,
    `Profiles describe the costume you wear in this lifetime. Your ${chartData.profile} profile influences how you interact with others, how you learn, and what themes will be important in your life journey.`,
    `Understanding your profile helps you recognize the natural rhythm and themes of your life. Each profile has its own way of moving through the world and relating to others.`
  ];
};

const getGeneralGuidanceResponses = (chartData) => {
  return [
    `As a ${chartData.type} with ${chartData.authority}, your path to fulfillment comes through following your strategy (${chartData.strategy}) and trusting your decision-making process. This combination is your recipe for living authentically.`,
    `Your Human Design shows you how to work with your natural energy rather than against it. When you honor your type, strategy, and authority, life becomes more effortless and satisfying.`,
    `The key to living your design is experimentation. Try following your strategy and authority in small decisions first, then notice how it feels. Your body will tell you when you're on the right track.`,
    `Remember, Human Design is not about limitation - it's about optimization. Understanding your design helps you work with your natural patterns for greater ease and effectiveness.`
  ];
};

const getRelationshipResponses = (chartData) => {
  return [
    `In relationships, your ${chartData.type} energy brings specific gifts. Understanding your design helps you show up authentically and communicate your needs clearly to partners.`,
    `Your ${chartData.authority} is crucial in relationship decisions. Use this same decision-making process when choosing partners, setting boundaries, and making relationship choices.`,
    `Relationships are a beautiful place to see your undefined centers in action. Notice what you amplify in others and what you take in from them - this can create both chemistry and conditioning.`,
    `As a ${chartData.type}, you have specific relationship dynamics. Understanding both your design and your partner's design can create more harmony and acceptance in your connections.`
  ];
};

const getCareerResponses = (chartData) => {
  return [
    `Your ${chartData.type} energy has specific implications for your career. ${chartData.type}s thrive when they can use their natural energy patterns in their work environment.`,
    `Your strategy (${chartData.strategy}) applies to career decisions too. Whether it's job opportunities, projects, or career changes, use your strategy to guide your professional choices.`,
    `Your defined centers show areas where you have consistent energy to offer in work situations. Your undefined centers show where you can be adaptable and learn from others in your career.`,
    `Career satisfaction for your type comes through aligning your work with your natural energy patterns. When you work in harmony with your design, you'll find both success and fulfillment.`
  ];
};