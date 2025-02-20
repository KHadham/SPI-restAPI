import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Note } from './entities/note.entity';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Note)
    private readonly noteRepository: Repository<Note>,
  ) {}

  // Create a new note
  async create(createNoteDto: CreateNoteDto): Promise<Note> {
    const note = this.noteRepository.create(createNoteDto);
    return this.noteRepository.save(note);
  }

  // Get all notes
  async findAll(): Promise<Note[]> {
    return this.noteRepository.find();
  }

  // Get a single note by ID
  async findOne(id: number): Promise<Note> {
    const note = await this.noteRepository.findOne({ where: { id } });
    if (!note) {
      throw new NotFoundException(`Note with ID ${id} not found`);
    }
    return note;
  }

  // Update a note by ID
  async update(id: number, updateNoteDto: UpdateNoteDto): Promise<Note> {
    const note = await this.findOne(id);
    this.noteRepository.merge(note, updateNoteDto);
    return this.noteRepository.save(note);
  }

  // Delete a note by ID
  async remove(id: number): Promise<void> {
    const note = await this.findOne(id);
    await this.noteRepository.remove(note);
  }
}
