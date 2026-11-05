import { PartialType } from '@nestjs/mapped-types';
import { CreateReDto } from './create-re.dto.js';

export class UpdateReDto extends PartialType(CreateReDto) {}
