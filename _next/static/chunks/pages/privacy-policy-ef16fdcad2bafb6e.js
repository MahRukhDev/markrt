(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9396],
  {
    38191: function (e, t, o) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/privacy-policy",
        function () {
          return o(92904);
        },
      ]);
    },
    72733: function (e, t, o) {
      "use strict";
      o.d(t, {
        o: function () {
          return s;
        },
      });
      var i = o(85893),
        r = o(9008),
        n = o.n(r),
        a = o(67294),
        s = function (e) {
          var t,
            o,
            r,
            s,
            c,
            l,
            d,
            h,
            u,
            m,
            p = e.seo,
            y = e.titlePrefix,
            v =
              (null ===
                (t = null === p || void 0 === p ? void 0 : p.metaImage.data) ||
              void 0 === t ||
              null === (o = t.attributes) ||
              void 0 === o
                ? void 0
                : o.url) || "/static/images/cover.jpg",
            f =
              null === p ||
              void 0 === p ||
              null === (r = p.metaSocial) ||
              void 0 === r
                ? void 0
                : r.find(function (e) {
                    return (
                      "Twitter" ===
                      (null === e || void 0 === e ? void 0 : e.socialNetwork)
                    );
                  }),
            g =
              null === p ||
              void 0 === p ||
              null === (s = p.metaSocial) ||
              void 0 === s
                ? void 0
                : s.find(function (e) {
                    return (
                      "Facebook" ===
                      (null === e || void 0 === e ? void 0 : e.socialNetwork)
                    );
                  }),
            w = y ? "".concat(y, " | ") : "";
          return (0, i.jsxs)(n(), {
            children: [
              (0, i.jsx)("link", { rel: "icon", href: "/favicon.png" }),
              (0, i.jsx)(
                "meta",
                {
                  property: "og:site_name",
                  content: "Prom",
                  "data-shuvi-head": "true",
                },
                "og:site_name"
              ),
              (0, i.jsx)(
                "meta",
                {
                  property: "twitter:site",
                  content: "Prom",
                  "data-shuvi-head": "true",
                },
                "twitter:site"
              ),
              (null === p || void 0 === p ? void 0 : p.metaTitle) &&
                (0, i.jsxs)(a.Fragment, {
                  children: [
                    (0, i.jsxs)("title", { children: [w, p.metaTitle] }),
                    (0, i.jsx)(
                      "meta",
                      {
                        property: "og:title",
                        content: "".concat(w).concat(p.metaTitle),
                      },
                      "og_title"
                    ),
                    (0, i.jsx)(
                      "meta",
                      {
                        name: "twitter:title",
                        content: "".concat(w).concat(p.metaTitle),
                      },
                      "twitter_title"
                    ),
                  ],
                }),
              (null === p || void 0 === p ? void 0 : p.metaDescription) &&
                (0, i.jsxs)(a.Fragment, {
                  children: [
                    (0, i.jsx)(
                      "meta",
                      { name: "description", content: p.metaDescription },
                      "description"
                    ),
                    (0, i.jsx)(
                      "meta",
                      {
                        property: "og:description",
                        content: p.metaDescription,
                      },
                      "og:description"
                    ),
                    (0, i.jsx)(
                      "meta",
                      {
                        name: "twitter:description",
                        content: p.metaDescription,
                      },
                      "twitter:description"
                    ),
                  ],
                }),
              (null === p || void 0 === p ? void 0 : p.keywords) &&
                (0, i.jsx)(
                  "meta",
                  { name: "keywords", content: p.keywords },
                  "keywords"
                ),
              (null === p || void 0 === p ? void 0 : p.metaRobots) &&
                (0, i.jsx)(
                  "meta",
                  { name: "robots", content: p.metaRobots },
                  "robots"
                ),
              (null === p || void 0 === p ? void 0 : p.metaViewport) &&
                (0, i.jsx)(
                  "meta",
                  { name: "viewport", content: p.metaViewport },
                  "viewport"
                ),
              (null === p || void 0 === p ? void 0 : p.canonicalURL) &&
                (0, i.jsx)("link", { rel: "canonical", href: p.canonicalURL }),
              (0, i.jsx)(
                "meta",
                { property: "twitter:card", content: "summary_large_image" },
                "twitter:card"
              ),
              (0, i.jsx)(
                "meta",
                { property: "og:image", content: v },
                "og:image"
              ),
              (0, i.jsx)(
                "meta",
                { name: "twitter:image", content: v },
                "twitter:image"
              ),
              f &&
                (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)(
                      "meta",
                      { name: "twitter:title", content: f.title },
                      "twitter:title"
                    ),
                    (0, i.jsx)(
                      "meta",
                      { name: "twitter:description", content: f.description },
                      "twitter:description"
                    ),
                    (0, i.jsx)(
                      "meta",
                      {
                        name: "twitter:image",
                        content:
                          (null === (c = f.image) ||
                          void 0 === c ||
                          null === (l = c.data) ||
                          void 0 === l ||
                          null === (d = l.attributes) ||
                          void 0 === d
                            ? void 0
                            : d.url) || v,
                      },
                      "twitter:image"
                    ),
                  ],
                }),
              g &&
                (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)(
                      "meta",
                      { name: "og:title", content: g.title },
                      "og:title"
                    ),
                    (0, i.jsx)(
                      "meta",
                      { name: "og:description", content: g.description },
                      "og:description"
                    ),
                    (0, i.jsx)(
                      "meta",
                      {
                        name: "og:image",
                        content:
                          (null === (h = g.image) ||
                          void 0 === h ||
                          null === (u = h.data) ||
                          void 0 === u ||
                          null === (m = u.attributes) ||
                          void 0 === m
                            ? void 0
                            : m.url) || v,
                      },
                      "og:image"
                    ),
                  ],
                }),
            ],
          });
        };
    },
    92904: function (e, t, o) {
      "use strict";
      o.r(t),
        o.d(t, {
          __N_SSG: function () {
            return s;
          },
          default: function () {
            return a;
          },
        });
      var i = o(85893),
        r = o(46574),
        n = o(72733),
        a = function (e) {
          var t = e.seo;
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(n.o, { seo: t, titlePrefix: "Privacy Policy" }),
              (0, i.jsxs)(r.Z, {
                children: [
                  (0, i.jsx)("p", {
                    children:
                      "At Prom, accessible from prom.io, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Prom and how we use it.",
                  }),
                  (0, i.jsx)("p", {
                    children:
                      "If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.",
                  }),
                  (0, i.jsx)("p", {
                    children:
                      "This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Prom. This policy is not applicable to any information collected offline or via channels other than this website.",
                  }),
                  (0, i.jsx)("h2", { children: "Consent" }),
                  (0, i.jsx)("p", {
                    children:
                      "By using our website, you hereby consent to our Privacy Policy and agree to its terms.",
                  }),
                  (0, i.jsx)("h2", { children: "Information we collect" }),
                  (0, i.jsx)("p", {
                    children:
                      "The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.",
                  }),
                  (0, i.jsx)("p", {
                    children:
                      "If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.",
                  }),
                  (0, i.jsx)("p", {
                    children:
                      "When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.",
                  }),
                  (0, i.jsx)("h2", { children: "How we use your information" }),
                  (0, i.jsx)("p", {
                    children:
                      "We use the information we collect in various ways, including to:",
                  }),
                  (0, i.jsxs)("ul", {
                    children: [
                      (0, i.jsx)("li", {
                        children: "Provide, operate, and maintain our website",
                      }),
                      (0, i.jsx)("li", {
                        children:
                          "Improve, personalize, and expand our website",
                      }),
                      (0, i.jsx)("li", {
                        children:
                          "Understand and analyze how you use our website",
                      }),
                      (0, i.jsx)("li", {
                        children:
                          "Develop new products, services, features, and functionality",
                      }),
                      (0, i.jsx)("li", {
                        children:
                          "Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes",
                      }),
                      (0, i.jsx)("li", { children: "Send you emails" }),
                      (0, i.jsx)("li", { children: "Find and prevent fraud" }),
                    ],
                  }),
                  (0, i.jsx)("h2", { children: "Log Files" }),
                  (0, i.jsx)("p", {
                    children:
                      "Prom follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.",
                  }),
                  (0, i.jsx)("h2", {
                    children: "Advertising Partners Privacy Policies",
                  }),
                  (0, i.jsx)("p", {
                    children:
                      "You may consult this list to find the Privacy Policy for each of the advertising partners of Prom.",
                  }),
                  (0, i.jsx)("p", {
                    children:
                      "Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Prom, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.",
                  }),
                  (0, i.jsx)("p", {
                    children:
                      "Note that Prom has no access to or control over these cookies that are used by third-party advertisers.",
                  }),
                  (0, i.jsx)("h2", {
                    children: "Third Party Privacy Policies",
                  }),
                  (0, i.jsxs)("p", {
                    children: [
                      "Prom's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.",
                      " ",
                    ],
                  }),
                  (0, i.jsx)("p", {
                    children:
                      "You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.",
                  }),
                  (0, i.jsx)("h2", {
                    children:
                      "CCPA Privacy Rights (Do Not Sell My Personal Information)",
                  }),
                  (0, i.jsx)("p", {
                    children:
                      "Under the CCPA, among other rights, California consumers have the right to:",
                  }),
                  (0, i.jsx)("p", {
                    children:
                      "Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.",
                  }),
                  (0, i.jsx)("p", {
                    children:
                      "Request that a business delete any personal data about the consumer that a business has collected.",
                  }),
                  (0, i.jsx)("p", {
                    children:
                      "Request that a business that sells a consumer's personal data, not sell the consumer's personal data.",
                  }),
                  (0, i.jsx)("p", {
                    children:
                      "If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.",
                  }),
                  (0, i.jsx)("h2", { children: "GDPR Data Protection Rights" }),
                  (0, i.jsx)("p", {
                    children:
                      "We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:",
                  }),
                  (0, i.jsx)("p", {
                    children:
                      "The right to access \u2013 You have the right to request copies of your personal data. We may charge you a small fee for this service.",
                  }),
                  (0, i.jsx)("p", {
                    children:
                      "The right to rectification \u2013 You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.",
                  }),
                  (0, i.jsx)("p", {
                    children:
                      "The right to erasure \u2013 You have the right to request that we erase your personal data, under certain conditions.",
                  }),
                  (0, i.jsx)("p", {
                    children:
                      "The right to restrict processing \u2013 You have the right to request that we restrict the processing of your personal data, under certain conditions.",
                  }),
                  (0, i.jsx)("p", {
                    children:
                      "The right to object to processing \u2013 You have the right to object to our processing of your personal data, under certain conditions.",
                  }),
                  (0, i.jsx)("p", {
                    children:
                      "The right to data portability \u2013 You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.",
                  }),
                  (0, i.jsx)("p", {
                    children:
                      "If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.",
                  }),
                  (0, i.jsx)("h2", { children: "Children's Information" }),
                  (0, i.jsx)("p", {
                    children:
                      "Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.",
                  }),
                  (0, i.jsx)("p", {
                    style: { paddingBottom: 30 },
                    children:
                      "Prom does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.",
                  }),
                ],
              }),
            ],
          });
        },
        s = !0;
    },
    9008: function (e, t, o) {
      e.exports = o(5443);
    },
  },
  function (e) {
    e.O(0, [9774, 2888, 179], function () {
      return (t = 38191), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
