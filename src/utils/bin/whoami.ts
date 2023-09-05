 const affirmations: string[] = ["brilliant", "resilient", "strong", "creative", "loved", "unique", "capable", "inspiring", 
    "incredible", "passionate", "valuable", "empowered", "radiant", "talented", "worthy", "courageous",
    "limitless", "a beacon of hope", "a force of nature", "a breath of fresh air", "a ray of sunshine",
    "a trailblazer", "an innovator", "an overcomer", "a gift to those around you", "a source of inspiration",
    "a pillar of strength", "a beacon in the darkness", "a master of persistence", "a true original",
    "a dreamer", "a doer", "a thinker", "a believer in good", "a seeker of truth", "a warrior of love",
    "a champion of kindness", "a symbol of perseverance", "a vessel of potential", "a spark of divinity",
    "a touch of magic", "a vision of grace", "a model of integrity", "a tapestry of talents", "a soul of depth",
    "a heart full of wonder", "a canvas of possibilities", "a voice of reason", "a melody of peace",
    "a reflection of beauty", "a rhythm of joy", "a note of positivity", "a treasure", "a gem", "a masterpiece",
    "an embodiment of light", "an oasis of calm", "an emblem of humility", "a manifestation of dreams",
    "a sculpture of willpower", "a narrative of triumph", "a story of resilience", "a testament to endurance",
    "a dance of creativity", "a flame of passion", "a gust of innovation", "a wave of change", "a touchstone of reliability",
    "an anchor in storms", "a compass when lost", "a star in the night sky", "a burst of energy", "a ripple of positivity",
    "a whirlwind of ideas", "a gust of fresh perspective", "a downpour of blessings", "a light in the tunnel", 
    "a whisper of reassurance", "a shout of joy", "a hum of patience", "a chant of wisdom", "a symphony of talents",
    "a picture of health", "a frame of contentment", "a snapshot of brilliance", "a panorama of possibilities",
    "a mural of memories", "a sketch of humility", "a portrait of grace", "a brushstroke of genius", 
    "a silhouette of elegance", "a work of art", "a mosaic of virtues", "a symbol of hope", "an explorer of possibilities", 
    "the embodiment of joy", "a mover and shaker", "the epitome of grace", "a reservoir of wisdom", "a burst of enthusiasm", 
    "a touchstone of authenticity", "an oasis of calm", "a maven of creativity", "a paragon of virtue", "a beacon of intelligence",
    "an architect of the future", "a warrior of peace", "an exemplar of patience", "a marvel of nature",
    "a guardian of dreams", "a fountain of inspiration", "a pillar of support", "an ambassador of love",
    "a source of encouragement", "a wellspring of ideas", "a champion of causes", "a maestro of harmony",
    "a ray of optimism", "a sower of positivity", "a pioneer of progress", "a luminary in darkness",
    "a seeker of wisdom", "a force of kindness", "a reflection of perseverance", "a spirit of tenacity",
    "a well of compassion", "a dynamo of energy", "a constellation of virtues", "a prism of diversity",
    "a beacon of courage", "a repository of insights", "a catalyst for change", "a purveyor of possibilities"];

export const whoami = async (args: string[]): Promise<string> => {
  const randomIndex = Math.floor(Math.random() * affirmations.length);

  return 'You are ' + affirmations[randomIndex] + '.';
};