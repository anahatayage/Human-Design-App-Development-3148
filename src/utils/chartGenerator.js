export const generateHumanDesignChart = (formData) => {
  // This is a simplified chart generator for demo purposes
  // In a real app, this would use actual Human Design calculation algorithms
  
  const types = ['Manifestor', 'Generator', 'Manifesting Generator', 'Projector', 'Reflector'];
  const strategies = {
    'Manifestor': 'To Inform',
    'Generator': 'To Respond',
    'Manifesting Generator': 'To Respond',
    'Projector': 'To Wait for the Invitation',
    'Reflector': 'To Wait a Lunar Cycle'
  };
  
  const authorities = [
    'Sacral Authority',
    'Emotional Authority',
    'Splenic Authority',
    'Ego Authority',
    'Self-Projected Authority',
    'Mental Authority',
    'Lunar Authority'
  ];
  
  const profiles = [
    '1/3 Investigator/Martyr',
    '1/4 Investigator/Opportunist',
    '2/4 Hermit/Opportunist',
    '2/5 Hermit/Heretic',
    '3/5 Martyr/Heretic',
    '3/6 Martyr/Role Model',
    '4/6 Opportunist/Role Model',
    '4/1 Opportunist/Investigator',
    '5/1 Heretic/Investigator',
    '5/2 Heretic/Hermit',
    '6/2 Role Model/Hermit',
    '6/3 Role Model/Martyr'
  ];
  
  const allCenters = ['head', 'ajna', 'throat', 'g', 'heart', 'spleen', 'solar', 'sacral', 'root'];
  
  // Generate random but realistic data based on birth info
  const randomSeed = (formData.name + formData.birthDate + formData.birthTime).length;
  const typeIndex = randomSeed % types.length;
  const selectedType = types[typeIndex];
  
  // Generate defined centers (typically 2-7 centers are defined)
  const numDefinedCenters = 2 + (randomSeed % 6);
  const definedCenters = [];
  const shuffledCenters = [...allCenters].sort(() => Math.random() - 0.5);
  
  for (let i = 0; i < numDefinedCenters; i++) {
    definedCenters.push(shuffledCenters[i]);
  }
  
  // Ensure Generator types have defined Sacral
  if ((selectedType === 'Generator' || selectedType === 'Manifesting Generator') && !definedCenters.includes('sacral')) {
    definedCenters[0] = 'sacral';
  }
  
  // Select authority based on defined centers
  let selectedAuthority;
  if (definedCenters.includes('solar')) {
    selectedAuthority = 'Emotional Authority';
  } else if (definedCenters.includes('sacral') && (selectedType === 'Generator' || selectedType === 'Manifesting Generator')) {
    selectedAuthority = 'Sacral Authority';
  } else if (definedCenters.includes('spleen')) {
    selectedAuthority = 'Splenic Authority';
  } else if (definedCenters.includes('heart')) {
    selectedAuthority = 'Ego Authority';
  } else if (definedCenters.includes('g')) {
    selectedAuthority = 'Self-Projected Authority';
  } else if (selectedType === 'Reflector') {
    selectedAuthority = 'Lunar Authority';
  } else {
    selectedAuthority = 'Mental Authority';
  }
  
  return {
    name: formData.name,
    birthDate: formData.birthDate,
    birthTime: formData.birthTime,
    birthPlace: formData.birthPlace,
    type: selectedType,
    strategy: strategies[selectedType],
    authority: selectedAuthority,
    profile: profiles[randomSeed % profiles.length],
    definedCenters: definedCenters,
    generatedAt: new Date().toISOString(),
    // Additional chart data would include gates, channels, etc.
    gates: generateGates(randomSeed),
    channels: generateChannels(definedCenters, randomSeed),
  };
};

const generateGates = (seed) => {
  // Generate some sample gates (1-64 in Human Design)
  const gates = [];
  const numGates = 15 + (seed % 10); // 15-25 gates typically
  
  for (let i = 0; i < numGates; i++) {
    const gateNumber = 1 + ((seed + i) % 64);
    const line = 1 + ((seed + i) % 6);
    gates.push({
      number: gateNumber,
      line: line,
      position: i < numGates / 2 ? 'conscious' : 'unconscious'
    });
  }
  
  return gates;
};

const generateChannels = (definedCenters, seed) => {
  // Generate sample channels based on defined centers
  const channels = [];
  
  // This is simplified - real channels connect specific gates between centers
  if (definedCenters.includes('throat') && definedCenters.includes('g')) {
    channels.push({ name: 'Channel of Alpha', gates: [7, 31] });
  }
  
  if (definedCenters.includes('sacral') && definedCenters.includes('g')) {
    channels.push({ name: 'Channel of Life Force', gates: [14, 2] });
  }
  
  if (definedCenters.includes('root') && definedCenters.includes('sacral')) {
    channels.push({ name: 'Channel of Mutation', gates: [3, 60] });
  }
  
  return channels;
};