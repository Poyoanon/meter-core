# meter-core

This is a modified version of [meter-core](https://github.com/lost-ark-dev/meter-core) for the purposes of documenting gauge and stagger values in the game.\
By default, only stagger values are turned on. You can re-enable the gauge gain functionality by doing the following: 
- Go to `src/packets/log/codeMapping.ts` 
- Uncommenting the `[codes.PKTIdentityGaugeChangeNotify, [logId.IdentityGaugeChangeNotify]],` line.

## Usage
Download [NodeJS](https://nodejs.org/en/download) and [Git](https://git-scm.com/downloads). To make your life easier, you should also download [Terminal](https://apps.microsoft.com/detail/9n0dx20hk701?rtc=1&hl=en-sg&gl=SG).
- Open Terminal in a folder that you want to download this project in, and type\
  `git clone --recurse-submodules https://github.com/Poyoanon/meter-core`.
- After that, navigate to the meter-core folder and type `npm install`.
- When the installation is done, type `npx -- ts-node --project tsconfig.tsnode.json src/test.ts` to begin monitoring.
- To close the program, hit `CTRL` and `C` at the same time.

## To get gauge gain from skills, you have to do the following:

1. Take (base gauge gain skill value)
2. then (tripod multiplier)
3. floor the number
4. then(rune multiplier)
5. floor the number
6. then (enlightenment bracelet multiplier, if applicable)
7. floor the number
8. then(spec multiplier) + (engraving multiplier like PS which is additive to spec multiplier, if applicable)
9. spec multiplier is defined by (spec)\*(class spec scaling)/6.99
10. floor the number
11. but you have to do it for **every individual hit for multiple hits** you need to calculate _every hit separately_ with the above”

# Updating for new patches

- Remember to fetch from the meter-data submodules.
- Update packets, but remove instances of elixir/gems from api/statapi.
