# Dev
* Clone with `git clone --recurse https://github.com/Poyoanon/meter-core`
* Install dependencies with `npm install`
* Adjust the packets you want to see in `codeMapping.ts`
* `PKTBlockSkillStateNotify` refers to stagger mechanics with defined yellow bars.
* `PKTParalyzationStateNotify` refers to long blue stagger bars when applicable.
* `PKTIdentityGaugeChangeNotify` refers to identity gauge generation.
* In terminal, run `npx -- tsc --showConfig > tsconfig.tsnode.json`. You only need to do this once.
* Then run `npx -- ts-node --project tsconfig.tsnode.json src/test.ts` to start logging.

# Troubleshooting
* Just make sure you have Visual Studio C++ development tools installed if you run into errors during `npm install`.
* Yell at me in *Discord* otherwise.