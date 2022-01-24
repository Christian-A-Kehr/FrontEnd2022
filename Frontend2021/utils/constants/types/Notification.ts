export default class Notification {
  id;

  sender;

  text;

  time;

  created_at;

  image;

  is_seen;

  constructor(
    id: number,
    sender: string,
    text: string,
    time: Date,
    created_at: string,
    image: string,
    is_seen: boolean,
  ) {
    this.id = id;
    this.sender = sender;
    this.text = text;
    this.time = time;
    this.created_at = created_at;
    this.image = image;
    this.is_seen = is_seen;
  }
}
