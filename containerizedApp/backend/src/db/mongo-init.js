db.createUser({
  user: 'name',
  pwd: 'passwo',
  roles: [
    {
      role: 'dbOwner',
      db: 'databaser',
    },
  ],
});

db.createCollection('meats');

db.meats.insert({ name: 'ME', dates: [], votes: [] });

db.meats.insert({ name: 'WEE', dates: [], votes: [] });