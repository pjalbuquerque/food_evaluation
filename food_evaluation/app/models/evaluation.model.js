module.exports = (sequelize, Sequelize) => {
  const Evaluation = sequelize.define("evaluation", {
    establishment_id: {
      type: Sequelize.STRING,
    },
    establishment_name: {
      type: Sequelize.STRING,
    },
    food_id: {
      type: Sequelize.STRING,
    },
    food_name: {
      type: Sequelize.STRING,
    },
    user_id: {
      type: Sequelize.STRING,
    },
    user_name: {
      type: Sequelize.STRING,
    },
    stars: {
      type: Sequelize.INTEGER,
    },
    whats_did_like: {
      type: Sequelize.STRING,
    },
    comment: {
      type: Sequelize.STRING,
    },
  });

  return Evaluation;
};
