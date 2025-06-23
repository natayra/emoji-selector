import { useState } from "react";
import { SmileyIcon } from "./Icons";
import _emojis from "./emojis.json";
import { cn } from "./util";

const EMOJIS: Emoji[] = _emojis;

interface Emoji {
  name: string;
  unicode: string[];
  category: string;
}

const renderEmoji = (emoji: Emoji) => {
  const codePoints = emoji.unicode.map((code) => parseInt(code.slice(2), 16));
  return String.fromCodePoint(...codePoints);
};

const EmojiDrawer: React.FC<{ setEmoji: (emoji: Emoji) => void }> = ({
  setEmoji,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const emojis = EMOJIS.filter((emoji) =>
    emoji.name.includes(searchQuery.toLowerCase())
  );
  const [recentlyUsed, setRecentlyUsed] = useState<Emoji[]>([]);
  const emojiTitles = ["Smileys and People", "Travel and Places", "Activities"];
  const handleClick = (emoji: Emoji) => {
    setEmoji(emoji);
    const checkRecentlyUsed = recentlyUsed.filter(
      (item) => item.unicode !== emoji.unicode
    );
    setRecentlyUsed([emoji, ...checkRecentlyUsed.slice(0, 4)]);
  };

  const Section: React.FC<{ title: string; emojis: Emoji[] }> = ({
    title,
    emojis,
  }) => (
    <section className="text-left mt-2">
      <h6>{title}</h6>
      <div className="grid grid-cols-7 gap-1 mt-2 text-lg">
        {emojis.map((emoji, index) => (
          <button
            key={index}
            onClick={() => handleClick(emoji)}
            className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-gray-200"
          >
            {renderEmoji(emoji)}
          </button>
        ))}
      </div>
    </section>
  );

  return (
    <div
      style={{ overflow: "hidden", overflowY: "scroll" }}
      className="w-72 h-56 rounded-lg shadow-lg absolute top-10 p-4 overflow-auto text-xs flex flex-col items-start"
    >
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="h-8 w-full bg-gray-100 text-sm py-1 px-4 rounded-lg focus:outline-none mb-2"
        placeholder="Search"
      />
      <Section title="Recently used" emojis={recentlyUsed} />
      {emojiTitles.map((title) => (
        <Section
          key={title}
          title={title}
          emojis={emojis.filter(
            (emoji) => emoji.category === title.toLowerCase()
          )}
        />
      ))}
    </div>
  );
};

const EmojiPicker = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState<Emoji | null>(null);

  return (
    <div className="flex flex-col relative">
      <button
        className={cn(
          "h-8 rounded-lg border-gray-300 border flex items-center justify-center gap-1",
          isOpen && "border-purple-300 bg-purple-50"
        )}
        style={{ padding: "6px 4px 6px 4px" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedEmoji ? (
          renderEmoji(selectedEmoji)
        ) : (
          <SmileyIcon className="size-[19px]" />
        )}
        <span className="text-sm">
          {selectedEmoji ? selectedEmoji.name : "Pick Emoji"}
        </span>
      </button>
      {isOpen && <EmojiDrawer setEmoji={setSelectedEmoji} />}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <article className="flex w-full h-full mt-[20%] justify-center">
      <EmojiPicker />
    </article>
  );
};

export default App;
