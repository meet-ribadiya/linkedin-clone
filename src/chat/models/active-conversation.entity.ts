import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('active_conversation')
export class ActiveConversationEntity {
  @PrimaryGeneratedColumn()
  Id: number;

  @Column()
  socketId: string;

  @Column()
  userId: number;

  @Column()
  conversationId: number;
}
