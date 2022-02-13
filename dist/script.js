function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}import * as React from "https://cdn.skypack.dev/react@17.0.1";

const notes = [
{
  letter: 'Q',
  sound: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Electronic%20Hits/72[kb]cylon.wav.mp3",
  name: 'Cyclon' },

{
  letter: 'W',
  sound: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Electronic%20Hits/86[kb]alarmblop.wav.mp3",
  name: 'Alarm-blop' },

{
  letter: 'E',
  sound: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Electronic%20Hits/85[kb]bellpip.wav.mp3",
  name: 'Bell-pip' },

{
  letter: 'A',
  sound: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Electronic%20Hits/20[kb]blonky.wav.mp3",
  name: 'Blony' },

{
  letter: 'S',
  sound: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Electronic%20Hits/77[kb]detuned-blurp.wav.mp3",
  name: 'Detuned-blurp' },

{
  letter: 'D',
  sound: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Electronic%20Hits/28[kb]electrodroplet.wav.mp3",
  name: 'Electrodroplet' },

{
  letter: 'Z',
  sound: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Electronic%20Hits/25[kb]doubleshot.wav.mp3",
  name: 'Doubleshot' },

{
  letter: 'X',
  sound: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Electronic%20Hits/48[kb]bwip-3.wav.mp3",
  name: 'Bwip' },

{
  letter: 'C',
  sound: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Electronic%20Hits/18[kb]hiphopwhstl.wav.mp3",
  name: 'Hiphopwhstl' }];



class DrumPad extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "handleKeydown",









    e => {
      if (e.keyCode === this.props.letter.charCodeAt()) {
        this.audio.play();
        this.audio.currentTime = 0;
        this.props.handleDisplay(this.props.id);
      }
    });_defineProperty(this, "handleClick",
    () => {
      this.audio.play();
      this.audio.currentTime = 0;
      this.props.handleDisplay(this.props.id);
    });}componentDidMount() {document.addEventListener('keydown', this.handleKeydown);window.focus();}componentWillUnmount() {document.removeEventListener('keydown', this.handleKeydown);}
  render() {
    return /*#__PURE__*/(
      React.createElement("div", {
        className: "drum-pad",
        id: this.props.id,
        onClick: this.handleClick }, /*#__PURE__*/
      React.createElement("h1", null, this.props.letter), /*#__PURE__*/
      React.createElement("audio", {
        ref: ref => this.audio = ref,
        className: "clip",
        src: this.props.sound,
        id: this.props.letter })));




  }}


class App extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "handleDisplay",




    display => this.setState({ display }));this.state = { display: '' };}
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "drum-machine" }, /*#__PURE__*/
      React.createElement("div", { id: "display" }, this.state.display), /*#__PURE__*/
      React.createElement("div", { id: "drum-pads" }, "  ", notes.map((d) => /*#__PURE__*/
      React.createElement(DrumPad, {
        id: d.name,
        letter: d.letter,
        sound: d.sound,
        handleDisplay: this.handleDisplay,
        onClick: this.handleClick })))));





  }}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));