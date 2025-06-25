exports.getHealthRecommendations = async (req, res) => {
  const { healthConditions } = req.body;

  try {
    const recommendations = [];

    if (healthConditions.includes('ulcer')) {
      recommendations.push('Avoid spicy foods and caffeine.');
      recommendations.push('Eat small, frequent meals.');
      recommendations.push('Stay hydrated with water.');
    }

    if (healthConditions.includes('high cholesterol')) {
      recommendations.push('Incorporate more fiber-rich foods.');
      recommendations.push('Avoid trans fats and fried foods.');
      recommendations.push('Consider omega-3 fatty acids.');
    }

    if (healthConditions.includes('diabetes')) {
      recommendations.push('Monitor carbohydrate intake.');
      recommendations.push('Choose whole grains over refined grains.');
      recommendations.push('Include lean proteins in meals.');
    }

    res.status(200).json({ success: true, recommendations });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
