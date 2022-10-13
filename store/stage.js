export const state = () => ({
  stages: [
    { id: 1, name: "todo" },
    { id: 2, name: "running" },
    { id: 4, name: "testing" },
    { id: 5, name: "complited" },
    { id: 34, name: "plited" },
  ],
});

export const mutations = {
  addStage(s, name) {
    const d = new Date();
    const stage = { id: d.getTime(), name: name };
    s.stages.push(stage);
  },
};
