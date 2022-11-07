"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2542],
  {
    45090: function (a, e, t) {
      t.d(e, {
        T: function () {
          return u;
        },
      });
      var s = t(26042),
        n = t(69396),
        r = t(828),
        c = t(46267),
        i = t(94396),
        d = t(21632),
        o = function (a, e) {
          return a.map(function (a) {
            var t,
              r = null === e || void 0 === e ? void 0 : e[a.name];
            return r
              ? (0, n.Z)(
                  (0, s.Z)(
                    {},
                    (null === (t = r.transform) || void 0 === t
                      ? void 0
                      : t.call(r, a)) || a
                  ),
                  { displayText: r.displayText }
                )
              : a;
          });
        },
        l = function (a, e) {
          return (
            (null === a || void 0 === a
              ? void 0
              : a.reduce(
                  function (a, t) {
                    var s,
                      n,
                      c = (0, r.Z)(
                        e
                          ? null !== (s = e[t.trait_type]) && void 0 !== s
                            ? s
                            : []
                          : [
                              "number" === t.display_type ? "bars" : "cards",
                              t.trait_type,
                            ],
                        3
                      ),
                      i = c[0],
                      o = c[1],
                      l = c[2];
                    i &&
                      (null === (n = a[i]) ||
                        void 0 === n ||
                        n.push({
                          type: t.display_type,
                          name: o || (0, d.Z)(t.trait_type),
                          originalName: t.trait_type,
                          value: l ? l(t.value) : t.value,
                        }));
                    return a;
                  },
                  { cards: [], bars: [], ratios: [] }
                )) || {}
          );
        },
        u = [
          {
            key: "AAVEGOTCHI",
            name: "Aavegotchi",
            slug: "aavegotchi",
            disabled: !0,
            contracts: [
              {
                chainId: c.a.Polygon,
                address: "0x86935f11c86623dec8a25696e1c19a8659cbf95d",
              },
            ],
            image: "/_next/static/media/aavegotchi.c1d11f24.jpg",
            description:
              "\n      Aavegotchis are pixelated ghosts living on the Ethereum\n      blockchain, backed by the ERC-721 standard. Their value is\n      determined by rarity level, which is calculated via multiple\n      factors, such as base traits, amount of staked\n      collateral/aTokens, and equipped wearables\n    ",
          },
          {
            key: "CRYPTO_BLADES",
            name: "CryptoBlades",
            image: "/_next/static/media/crypto-blades.eecfe721.jpg",
            contracts: [
              {
                chainId: c.a.BSC,
                address: "0x7e091b0a220356b157131c831258a9c98ac8031a",
                slug: "crypto-blades-weapons-bsc",
              },
              {
                chainId: c.a.BSC,
                address: "0xc6f252c2cdd4087e30608a35c022ce490b58179b",
                slug: "crypto-blades-characters-bsc",
              },
              {
                chainId: c.a.BSC,
                address: "0xc6f252c2cdd4087e30608a35c022ce490b58179b",
                slug: "crypto-blades-shields-bsc",
              },
              {
                chainId: c.a.BSC,
                address: "0x358ce1ebc87300c3a75ed51411c17ac3a9cfa11c",
                slug: "crypto-blades-junk-bsc",
              },
              {
                chainId: c.a.BSC,
                address: "0x16680bafe395022ae73755946fe5d484118fe035",
                slug: "crypto-blades-raid-trinket-bsc",
              },
              {
                chainId: c.a.BSC,
                address: "0x4af4e207f4e9217352af4570c78581af2f6cbb40",
                slug: "crypto-blades-key-lootbox-bsc",
              },
              {
                chainId: c.a.Polygon,
                address: "0xd9c5449efb3f99952f73e824688724aafb81de6e",
                slug: "crypto-blades-weapons-polygon",
              },
              {
                chainId: c.a.Polygon,
                address: "0x929059fef67b88ce2f4127e59b50bea123981998",
                slug: "crypto-blades-characters-polygon",
              },
              {
                chainId: c.a.Polygon,
                address: "0x68a288c2a96e2cd5c45769e02f2bbc2e90bae39b",
                slug: "crypto-blades-shields-polygon",
              },
              {
                chainId: c.a.Polygon,
                address: "0xa75203d757bb4caf4cc008d8b16b36b2ee74c77e",
                slug: "crypto-blades-junk-polygon",
              },
              {
                chainId: c.a.Polygon,
                address: "0xa397649d96af0d0055c7057de5f879f74d577377",
                slug: "crypto-blades-raid-trinket-polygon",
              },
              {
                chainId: c.a.Polygon,
                address: "0x49621e881b5f87dbd6a02f4581fe067bcc0f847d",
                slug: "crypto-blades-key-lootbox-polygon",
              },
              {
                chainId: c.a.Avalanche,
                address: "0xe8f172b51186a4c8127d5ee05617dca6aaf478fe",
                slug: "crypto-blades-weapons-avax",
              },
              {
                chainId: c.a.Avalanche,
                address: "0x28857cccca599f0876792094870758a18f581dc0",
                slug: "crypto-blades-characters-avax",
              },
              {
                chainId: c.a.Avalanche,
                address: "0x1609bd8ea43b1c23de90071b82cd08fa098ddcf3",
                slug: "crypto-blades-shields-avax",
              },
              {
                chainId: c.a.Avalanche,
                address: "0xb5c02943971a263011da86b274846e720f95abdc",
                slug: "crypto-blades-junk-avax",
              },
              {
                chainId: c.a.Avalanche,
                address: "0x0422064947cfc8ee368167e7258765026129a052",
                slug: "crypto-blades-raid-trinket-avax",
              },
              {
                chainId: c.a.Avalanche,
                address: "0xb3e8b0139f7e073440e797ecc088e1e0f5c3dfd9",
                slug: "crypto-blades-key-lootbox-avax",
              },
            ],
            description:
              "\n      Become the most powerful blade wielder in the blockchain!\n      Earn $SKILL tokens by defeating enemies, winning on PVP, and staking your gains.\n    ",
          },
          {
            key: "ELPIS_BATTLE",
            name: "Elpis Battle",
            slug: "elpis-battle",
            image: "/_next/static/media/elpis-battle.58f884c0.jpg",
            disabled: !0,
            contracts: [
              {
                chainId: c.a.BSC,
                address: "0xe9156432Bc661300722aB1eDE425EB2A607dd26C",
                name: "Heroes",
              },
              {
                chainId: c.a.BSC,
                address: "0x6647BD0cc251ea11c77E655E9020c10c22704170",
                name: "Equipment",
              },
            ],
            creator: "0x4105942c8eb4c8b2bbbadd8ee34e1af3d56d9095",
            description:
              "Built on Binance Smart Chain Blockchain, Elpis Battle is a turn-based game, where groups of players upgrade their teams and explore the fantasy world. Users can earn crypto by completing multiple tasks and trying various roles.",
            propertyTransform: function (a, e) {
              var t,
                n,
                r = new Set([
                  "Strength",
                  "Vitality",
                  "Agility",
                  "Passive 1",
                  "Passive 2",
                  "Normal",
                  "Special",
                  "Ultimate",
                ]);
              return (0, i.Q)(
                null !==
                  (t =
                    null === e || void 0 === e ? void 0 : e.contractAddress) &&
                  void 0 !== t
                  ? t
                  : "",
                "0xe9156432Bc661300722aB1eDE425EB2A607dd26C"
              )
                ? l(
                    a,
                    (0, s.Z)(
                      {
                        Strength: ["bars", "Base Stregnth"],
                        Vitality: ["bars", "Base Vitality"],
                        Agility: ["bars", "Base Agility"],
                      },
                      Object.fromEntries(
                        null !==
                          (n =
                            null === a || void 0 === a
                              ? void 0
                              : a
                                  .filter(function (a) {
                                    return !r.has(a.trait_type);
                                  })
                                  .map(function (a) {
                                    return [a.trait_type, ["cards"]];
                                  })) && void 0 !== n
                          ? n
                          : []
                      )
                    )
                  )
                : l(a, {
                    "Main Stats 1": ["cards", "Stats"],
                    "Main Stats 2": ["cards", "Stats"],
                    "Sub Stats 1": ["cards", "Affixes"],
                    "Sub Stats 2": ["cards", "Affixes"],
                    "Sub Stats 3": ["cards", "Affixes"],
                    "Sub Stats 4": ["cards", "Affixes"],
                    Category: ["cards"],
                    Race: ["cards"],
                  });
            },
            propertyFiltrationTransform: function (a) {
              return o(a, {
                "Main Stats 1": { displayText: "Stats" },
                "Main Stats 2": { displayText: "Stats" },
                "Sub Stats 1": { displayText: "Affixes" },
                "Sub Stats 2": { displayText: "Affixes" },
                "Sub Stats 3": { displayText: "Affixes" },
                "Sub Stats 4": { displayText: "Affixes" },
              });
            },
          },
          {
            key: "META_SOCCER",
            name: "MetaSoccer",
            slug: "metasoccer",
            image: "/_next/static/media/meta-soccer.42c2430a.jpg",
            disabled: !0,
            contracts: [
              {
                chainId: c.a.Polygon,
                address: "0x6f5D7bA06aD7B28319d86fceC09fae5bbC83d32F",
                name: "Players",
              },
              {
                chainId: c.a.Polygon,
                address: "0x94E42811Db93EF7831595b6fF9360491B987DFbD",
                name: "Scouts",
              },
            ],
            creator: "0x0bae1695ad0034e0eb1c121df904ab919ae4951a",
            description:
              "Designed by Champion Games in 2021, MetaSoccer is the first P2E soccer, where gamers can make the most of this sport in a completely realistic way. For instance, they have opportunities to manage their clubs, scout, train, and trade talents within the metaverse, or bet while earning crypto.",
            propertyTransform: function (a) {
              return l(a);
            },
          },
          {
            key: "TINY_WORLD",
            name: "Tiny World",
            slug: "tiny-world",
            image: "/_next/static/media/tiny-world.ad82e7d3.jpg",
            disabled: !0,
            contracts: [
              {
                chainId: c.a.BSC,
                address: "0xD80EdcF7C73B43852dA39497a6B5E9cbA1Edf39e",
              },
            ],
            creator: "0x802f0928081a248eb3a976fd84b15e4ac40a5ef2",
            description:
              "Tiny World is a P2E game where users are welcome to uncover over a hundred Tiny Hero NFTs and start their fantastic Idle RPG journey exploring a special kingdom with tasks to earn.",
            propertyTransform: function (a) {
              return l(a, {
                initPower: ["bars", "Initial Power"],
                power: ["bars", "Current Power"],
                attack: ["bars"],
                defense: ["bars"],
                hp: ["bars", "HP"],
                itemGrade: [
                  "cards",
                  "Class",
                  function (a) {
                    return ["N", "R", "SR", "SSR", "SSSR", "UR"][a];
                  },
                ],
                itemLevel: ["cards", "Level"],
              });
            },
            propertyFiltrationTransform: function (a) {
              return o(a, {
                initPower: { displayText: "Initial Power" },
                power: { displayText: "Current Power" },
                hp: { displayText: "HP" },
                attack: { displayText: "Attack" },
                defense: { displayText: "Defense" },
                itemGrade: {
                  displayText: "Class",
                  transform: function (a) {
                    var e,
                      t,
                      r =
                        ((e = a),
                        (t = ["N", "R", "SR", "SSR", "SSSR", "UR"]),
                        (0, n.Z)((0, s.Z)({}, e), {
                          values: t.map(function (a, e) {
                            return { displayText: a, valueString: e };
                          }),
                        }));
                    return (0, n.Z)((0, s.Z)({}, r), {
                      values: r.values.slice(1),
                    });
                  },
                },
                itemLevel: { displayText: "Level" },
              }).filter(function (a) {
                return !["itemType", "itemCode", "blockNumber"].includes(
                  a.name
                );
              });
            },
          },
        ];
      u.filter(function (a) {
        return Boolean(a.image);
      }).sort(function (a) {
        return a.disabled ? 1 : -1;
      });
    },
    12898: function (a, e, t) {
      t.d(e, {
        w: function () {
          return l;
        },
      });
      var s = t(26042),
        n = t(69396),
        r = t(99542),
        c = t(7979),
        i = t(28715),
        d = t(34641),
        o = t(74542),
        l = function (a) {
          var e = "string" === typeof a ? parseInt(a, 10) : a,
            t = (0, r.b)(e);
          switch (e) {
            case c.UY.chainId:
            case c.ZR.chainId:
            case c.ny.chainId:
              return (0, n.Z)((0, s.Z)({}, t), {
                chainName: "Ethereum",
                assetsChainName: "ethereum",
              });
            case i.mg.chainId:
            case i.Nj.chainId:
              return (0, n.Z)((0, s.Z)({}, t), {
                chainName: "Polygon",
                assetsChainName: "polygon",
              });
            case d.Su.chainId:
              return (0, n.Z)((0, s.Z)({}, t), {
                chainName: "Smartchain",
                assetsChainName: "binance",
              });
            case o.KA.chainId:
              return (0, n.Z)((0, s.Z)({}, t), {
                assetsChainName: "avalanchec",
              });
            default:
              return (0, n.Z)((0, s.Z)({}, t), {
                assetsChainName: t.chainName.toLowerCase(),
              });
          }
        };
    },
  },
]);
