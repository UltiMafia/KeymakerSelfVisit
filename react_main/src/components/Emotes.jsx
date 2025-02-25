import React from "react";

import "../css/emotes.css";

export function Emote(props) {
  const emoteKey = props.emote.toLowerCase();
  const emote = Emotes[emoteKey];

  return (
    <div
      className="emote"
      title={emote.name}
      style={{
        backgroundImage: `url('/images/emotes/${emote.name.toLowerCase()}.${
          emote.type
        }')`,
      }}
    />
  );
}

export function emotify(text) {
  if (text == null) return;

  if (!Array.isArray(text)) text = [text];

  for (let i in text) {
    let segment = text[i];

    if (typeof segment != "string") continue;

    const words = segment.split(" ");

    for (let j in words) {
      let word = words[j].toLowerCase();

      // Checking if Emote dictionary contains the word.
      if (Emotes[word] && typeof Emotes[word] != "function") {
        words[j] = <Emote emote={word} />;
      } else {
        if (j < words.length - 1) {
          // do NOT append an extra ' ' space in the last word (which wasn't there in the first place)
          words[j] += " ";
        }
      }
    }

    text[i] = words;
  }

  text = text.flat();
  return text.length === 1 ? text[0] : text;
}

export const Emotes = {
  // emojis
  ";_;": {
    name: "cry",
    type: "webp",
  },
  ";)": {
    name: "wink",
    type: "webp",
  },
  ":(": {
    name: "sad",
    type: "webp",
  },
  ":)": {
    name: "happy",
    type: "webp",
  },
  ":o": {
    name: "surprised",
    type: "webp",
  },
  ":p": {
    name: "tongue",
    type: "webp",
  },
  "-_-": {
    name: "expressionless",
    type: "webp",
  },
  ":|": {
    name: "neutral",
    type: "webp",
  },
  ":3": {
    name: "candy",
    type: "webp",
  },
  ":wink:": {
    name: "wink",
    type: "webp",
  },
  ":zzz:": {
    name: "zzz",
    type: "webp",
  },
  ">:(": {
    name: "frown",
    type: "webp",
  },
  o_o: {
    name: "confused",
    type: "webp",
  },
  zzz: {
    name: "zzz",
    type: "webp",
  },
  ":thonk:": {
    name: "thonk",
    type: "webp",
  },
  ":thunk:": {
    name: "thunk",
    type: "webp",
  },
  // retro
  "<3": {
    name: "heart",
    type: "webp",
  },
  "-@": {
    name: "jack",
    type: "webp",
  },
  ":christmas:": {
    name: "christmas",
    type: "webp",
  },
  ":cookie:": {
    name: "cookie",
    type: "webp",
  },
  ":star:": {
    name: "star",
    type: "webp",
  },
  ":rose:": {
    name: "rose",
    type: "webp",
  },
  ":santa:": {
    name: "santa",
    type: "webp",
  },
  // common
  ":awoo:": {
    name: "awoo",
    type: "webp",
  },
  ":bats:": {
    name: "bats",
    type: "webp",
  },
  ":birb:": {
    name: "birb",
    type: "gif",
  },
  ":boar:": {
    name: "boar",
    type: "webp",
  },
  ":bob:": {
    name: "bob",
    type: "gif",
  },
  ":bub:": {
    name: "bub",
    type: "gif",
  },
  ":bum:": {
    name: "bum",
    type: "gif",
  },
  ":bump:": {
    name: "bump",
    type: "webp",
  },
  ":bunny:": {
    name: "bunny",
    type: "webp",
  },
  ":cake:": {
    name: "cake",
    type: "webp",
  },
  ":catjam:": {
    name: "catjam",
    type: "gif",
  },
  ":cavebob:": {
    name: "cavebob",
    type: "webp",
  },
  ":chick:": {
    name: "chick",
    type: "webp",
  },
  ":couldyounot:": {
    name: "couldyounot",
    type: "gif",
  },
  ":cupcake:": {
    name: "cupcake",
    type: "webp",
  },
  ":ditto:": {
    name: "ditto",
    type: "gif",
  },
  ":doge:": {
    name: "doge",
    type: "webp",
  },
  ":rainbowdoge:": {
    name: "rainbowdoge",
    type: "webp",
  },
  ":rawr:": {
    name: "rawr",
    type: "webp",
  },
  // pepe
  ":ez:": {
    name: "EZ",
    type: "webp",
  },
  ":feelsdankman:": {
    name: "FeelsDankMan",
    type: "webp",
  },
  ":feelsokayman:": {
    name: "FeelsOkayMan",
    type: "webp",
  },
  ":pepeawooga:": {
    name: "awooga128",
    type: "webp",
  },
  ":pepega:": {
    name: "Pepega",
    type: "webp",
  },
  ":pepegaaim:": {
    name: "PepegaAim",
    type: "gif",
  },
  ":pepehands:": {
    name: "PepeHands",
    type: "webp",
  },
  ":pepelaugh:": {
    name: "PepeLaugh",
    type: "webp",
  },
  ":pepemeltdown:": {
    name: "PepeMeltdown",
    type: "gif",
  },
  ":pepepains:": {
    name: "PepePains",
    type: "webp",
  },
  ":pepepls:": {
    name: "PepePls",
    type: "gif",
  },
  ":pepereee:": {
    name: "reeeee1",
    type: "webp",
  },
  ":pepog:": {
    name: "PepoG",
    type: "webp",
  },
  ":sadge:": {
    name: "Sadge",
    type: "webp",
  },
  ":monkagun:": {
    name: "MonkaGun",
    type: "webp",
  },
  ":monkahmm:": {
    name: "MonkaHmm",
    type: "webp",
  },
  ":monkas:": {
    name: "MonkaS",
    type: "webp",
  },
  ":nodders:": {
    name: "Nodders",
    type: "gif",
  },
  ":nopers:": {
    name: "Nopers",
    type: "gif",
  },
  ":peepohappy:": {
    name: "PeepoHappy",
    type: "webp",
  },
  ":peeposad:": {
    name: "PeepoSad",
    type: "webp",
  },
  ":peepowtf:": {
    name: "PeepoWtf",
    type: "webp",
  },
  ":fox:": {
    name: "fox",
    type: "webp",
  },
  ":fufu:": {
    name: "fufu",
    type: "webp",
  },
  ":fufunb:": {
    name: "fufunb",
    type: "jpg",
  },
  ":fufubi:": {
    name: "fufubi",
    type: "webp",
  },
  ":fufulesbian:": {
    name: "fufulesbian",
    type: "webp",
  },
  ":fufutrans:": {
    name: "fufutrans",
    type: "webp",
  },
  ":omg:": {
    name: "omg",
    type: "webp",
  },
  ":gay:": {
    name: "gay",
    type: "webp",
  },
  ":eee:": {
    name: "eee",
    type: "webp",
  },
  ":ghost:": {
    name: "ghost",
    type: "webp",
  },
  ":golb:": {
    name: "golb",
    type: "webp",
  },
  ":guessilldie:": {
    name: "guessilldie",
    type: "webp",
  },
  ":hamster:": {
    name: "hamster",
    type: "gif",
  },
  ":horse:": {
    name: "horse",
    type: "webp",
  },
  ":huh:": {
    name: "huh",
    type: "webp",
  },
  ":kapp:": {
    name: "Kapp",
    type: "webp",
  },
  ":kekm:": {
    name: "kekm",
    type: "webp",
  },
  ":lion:": {
    name: "lion",
    type: "webp",
  },
  ":lmao:": {
    name: "lmao",
    type: "webp",
  },
  ":mermaid:": {
    name: "mermaid",
    type: "webp",
  },
  ":monkfade:": {
    name: "monkfade",
    type: "gif",
  },
  ":monkspin:": {
    name: "monkspin",
    type: "gif",
  },
  ":omegalul:": {
    name: "Omegalul",
    type: "webp",
  },
  ":panda:": {
    name: "panda",
    type: "webp",
  },
  ":penguin:": {
    name: "penguin",
    type: "webp",
  },
  ":pingu:": {
    name: "pingu",
    type: "gif",
  },
  ":pizza:": {
    name: "pizza",
    type: "webp",
  },
  ":quiggle:": {
    name: "quiggle",
    type: "webp",
  },
  ":rainbow:": {
    name: "rainbow",
    type: "webp",
  },
  ":ratjam:": {
    name: "ratjam",
    type: "gif",
  },
  ":roach:": {
    name: "roach",
    type: "gif",
  },
  ":sandbox:": {
    name: "sandbox",
    type: "webp",
  },
  ":sheep:": {
    name: "sheep",
    type: "webp",
  },
  ":sip:": {
    name: "sip",
    type: "webp",
  },
  ":snake:": {
    name: "snake",
    type: "webp",
  },
  ":swag:": {
    name: "swag",
    type: "gif",
  },
  ":taco:": {
    name: "taco",
    type: "gif",
  },
  ":thomas:": {
    name: "thomasoface",
    type: "webp",
  },
  ":tiger:": {
    name: "tiger",
    type: "webp",
  },
  ":tip:": {
    name: "tip",
    type: "gif",
  },
  ":tipb:": {
    name: "tipb",
    type: "gif",
  },
  ":tmnt:": {
    name: "tmnt",
    type: "gif",
  },
  ":unicorn:": {
    name: "unicorn",
    type: "webp",
  },
  ":werewolf:": {
    name: "werewolf",
    type: "webp",
  },
  ":wolf:": {
    name: "wolf",
    type: "webp",
  },
  ":yum:": {
    name: "yum",
    type: "gif",
  },
  // system
  ":rip:": {
    name: "rip",
    type: "webp",
  },
  ":message:": {
    name: "message",
    type: "webp",
  },
  ":will:": {
    name: "will",
    type: "webp",
  },
  ":hammer:": {
    name: "hammer",
    type: "webp",
  },
  ":system:": {
    name: "system",
    type: "webp",
  },
  // items
  ":gun:": {
    name: "gun",
    type: "webp",
  },
  ":gunfab:": {
    name: "gunfab",
    type: "webp",
  },
  ":gun2:": {
    name: "gun2",
    type: "webp",
  },
  ":armor:": {
    name: "armor",
    type: "webp",
  },
  ":key:": {
    name: "key",
    type: "webp",
  },
  ":bread:": {
    name: "bread",
    type: "webp",
  },
  ":crystal:": {
    name: "crystal",
    type: "webp",
  },
  ":beer:": {
    name: "beer",
    type: "webp",
  },
  ":bomb:": {
    name: "bomb",
    type: "webp",
  },
  ":cat2:": {
    name: "cat2",
    type: "webp",
  },
  ":candle:": {
    name: "candle",
    type: "webp",
  },
  ":knife:": {
    name: "knife",
    type: "webp",
  },
  ":doll:": {
    name: "doll",
    type: "webp",
  },
  ":match:": {
    name: "match",
    type: "webp",
  },
  ":dynamite:": {
    name: "dynamite",
    type: "webp",
  },
  ":snowball:": {
    name: "snowball",
    type: "webp",
  },
  ":timebomb:": {
    name: "timebomb",
    type: "webp",
  },
  ":yuzu:": {
    name: "yuzu",
    type: "webp",
  },
  // investigative
  ":invest:": {
    name: "invest",
    type: "webp",
  },
  ":journ:": {
    name: "journ",
    type: "webp",
  },
  ":look:": {
    name: "look",
    type: "webp",
  },
  ":track:": {
    name: "track",
    type: "webp",
  },
  ":snoop:": {
    name: "snoop",
    type: "webp",
  },
  ":learnrole:": {
    name: "learnrole",
    type: "webp",
  },
  ":loud:": {
    name: "loud",
    type: "webp",
  },
  ":dream:": {
    name: "dream",
    type: "webp",
  },
  ":carol:": {
    name: "carol",
    type: "webp",
  },
  ":law:": {
    name: "law",
    type: "webp",
  },
  ":visited:": {
    name: "visited",
    type: "webp",
  },
  // effects
  ":love:": {
    name: "love",
    type: "webp",
  },
  ":hb:": {
    name: "heartbroken",
    type: "webp",
  },
  ":insane:": {
    name: "insane",
    type: "webp",
  },
  ":sane:": {
    name: "sane",
    type: "webp",
  },
  ":invincible:": {
    name: "invincible",
    type: "webp",
  },
  // death
  ":blood:": {
    name: "blood",
    type: "webp",
  },
  ":veg:": {
    name: "veg",
    type: "webp",
  },
  ":exit:": {
    name: "exit",
    type: "webp",
  },
  // win
  ":flagblue:": {
    name: "flagblue",
    type: "webp",
  },
  ":flagblack:": {
    name: "flagblack",
    type: "webp",
  },
  ":flagyellow:": {
    name: "flagyellow",
    type: "webp",
  },
  ":mistletoe:": {
    name: "mistletoe",
    type: "webp",
  },
  // others
  ":bible:": {
    name: "bible",
    type: "webp",
  },
  ":tree:": {
    name: "tree",
    type: "webp",
  },
  ":anon:": {
    name: "anon",
    type: "webp",
  },
  ":suit:": {
    name: "suit",
    type: "webp",
  },
  ":mop:": {
    name: "mop",
    type: "webp",
  },
  ":poison:": {
    name: "poison",
    type: "webp",
  },
  ":turkey:": {
    name: "turkey",
    type: "webp",
  },
  // unused
  ":violin:": {
    name: "violin",
    type: "webp",
  },
  ":bee:": {
    name: "bee",
    type: "webp",
  },
};

export const EmoteKeys = Object.keys(Emotes);
