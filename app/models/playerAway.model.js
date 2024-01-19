module.exports = (mongoose) => {
  const schema = mongoose.Schema(
    {
      name: String,
      no: String,
      Position: String,
    },
    {
      timestamps: true,
    }
  );

  return mongoose.model("playerAway", schema);
};
