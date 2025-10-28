import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'lifestylePost',
  title: 'Lifestyle Post',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Main Image',
      type: 'image',
      options: {hotspot: true},
      fields: [
        {
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
          options: {isHighlighted: true},
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'translations.en.title', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Finance', value: 'finance'},
          {title: 'Tips', value: 'tips'},
          {title: 'Travel', value: 'travel'},
          {title: 'Education', value: 'education'},
          {title: 'Health', value: 'health'},
          {title: 'Lifestyle', value: 'lifestyle'},
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'translations',
      title: 'Translations',
      type: 'object',
      fields: [
        defineField({
          name: 'en',
          title: 'English',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'excerpt',
              title: 'Excerpt',
              type: 'text',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'content',
              title: 'Content',
              type: 'array',
              of: [
                {type: 'block'},
                {
                  type: 'image',
                  options: {hotspot: true},
                  fields: [
                    {
                      name: 'alt',
                      title: 'Alternative Text',
                      type: 'string',
                      options: {isHighlighted: true},
                    },
                  ],
                },
              ],
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
        defineField({
          name: 'it',
          title: 'Italian',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'excerpt',
              title: 'Excerpt',
              type: 'text',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'content',
              title: 'Content',
              type: 'array',
              of: [
                {type: 'block'},
                {
                  type: 'image',
                  options: {hotspot: true},
                  fields: [
                    {
                      name: 'alt',
                      title: 'Alternative Text',
                      type: 'string',
                      options: {isHighlighted: true},
                    },
                  ],
                },
              ],
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
        defineField({
          name: 'es',
          title: 'Spanish',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'excerpt',
              title: 'Excerpt',
              type: 'text',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'content',
              title: 'Content',
              type: 'array',
              of: [
                {type: 'block'},
                {
                  type: 'image',
                  options: {hotspot: true},
                  fields: [
                    {
                      name: 'alt',
                      title: 'Alternative Text',
                      type: 'string',
                      options: {isHighlighted: true},
                    },
                  ],
                },
              ],
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
      ],
    }),
  ],
})
