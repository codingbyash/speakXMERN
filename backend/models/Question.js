import mongoose from "mongoose";

const QuestionCategories = {
  ANAGRAM: "ANAGRAM",
  MULTIPLE_CHOICE: "MULTIPLE_CHOICE",
  READ_ALONG: "READ_ALONG",
  CONTENT_ONLY: "CONTENT_ONLY",
  CONVERSATION: "CONVERSATION",
};

const AnagramFormats = {
  WORD: "WORD",
  SENTENCE: "SENTENCE",
};

const anagramBlockSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  showInOption: {
    type: Boolean,
    required: true,
    default: true,
  },
  isAnswer: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const mcqOptionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  isCorrectAnswer: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const questionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: Object.values(QuestionCategories),
    required: true,
  },
  solution: {
    type: String,
    required: false,
  },
  relatedQuestionId: {
    type: String,
    required: false,
  },
  anagramFormat: {
    type: String,
    enum: Object.values(AnagramFormats),
    required: function () {
      return this.category === QuestionCategories.ANAGRAM;
    },
  },
  blocks: {
    type: [anagramBlockSchema],
    required: function () {
      return this.category === QuestionCategories.ANAGRAM;
    },
  },
  mcqOptions: {
    type: [mcqOptionSchema],
    required: function () {
      return this.category === QuestionCategories.MULTIPLE_CHOICE;
    },
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Question", questionSchema);
