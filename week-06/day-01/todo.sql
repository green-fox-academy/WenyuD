create table todos (
    taskName text,
    done boolean
)

insert into todos
values ("Eat lunch", false),
    ("Eat breakfast", true),
    ("Go to work", true),
    ("Eat dinner", false),
    ("Sleep early", false);

select * from todos;

update todos
set done = true 
where taskName = "Eat lunch";

delete from todos
where taskName = "Sleep early";